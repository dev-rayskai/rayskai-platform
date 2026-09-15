'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const vertexShader = `
  uniform float uTime;
  varying vec2 vUv;
  varying float vWave;
  void main() {
    vUv = uv;
    vec3 p = position;
    float wave = sin(p.x * 1.8 + uTime * .55) * .16 + cos(p.y * 2.3 - uTime * .38) * .12;
    p.z += wave;
    vWave = wave;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uPointer;
  varying vec2 vUv;
  varying float vWave;
  float orb(vec2 p, vec2 c, float s) { return s / max(length(p-c), .05); }
  void main() {
    vec2 p = vUv - .5;
    vec3 ink = vec3(.012, .055, .075);
    vec3 mint = vec3(.27, .95, .72);
    vec3 gold = vec3(.86, 1.0, .53);
    float light = orb(p, (uPointer-.5)*.32, .055);
    float ribbon = smoothstep(.14, 0., abs(p.y + sin(p.x*5. + uTime*.3)*.09));
    vec3 color = ink + mint * light * .22 + mix(mint, gold, vUv.x) * ribbon * .13;
    color += mint * max(vWave, 0.) * .12;
    float alpha = .56 + ribbon * .18;
    gl_FragColor = vec4(color, alpha);
  }
`;

export default function LuxuryWebGL() {
  const mount = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!mount.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const host = mount.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, .1, 100);
    camera.position.set(0, 0, 5.4);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
    renderer.setClearAlpha(0);
    host.appendChild(renderer.domElement);

    const uniforms = { uTime: { value: 0 }, uPointer: { value: new THREE.Vector2(.65, .35) } };
    const liquid = new THREE.Mesh(
      new THREE.PlaneGeometry(7.2, 5.2, 54, 42),
      new THREE.ShaderMaterial({ vertexShader, fragmentShader, uniforms, transparent: true, depthWrite: false, side: THREE.DoubleSide })
    );
    liquid.rotation.x = -.12;
    scene.add(liquid);

    const count = 420;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const ring = 1.2 + Math.random() * 2.6;
      const angle = Math.random() * Math.PI * 2;
      positions[i*3] = Math.cos(angle) * ring;
      positions[i*3+1] = Math.sin(angle) * ring * .68;
      positions[i*3+2] = (Math.random() - .5) * 2.4;
    }
    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(particlesGeometry, new THREE.PointsMaterial({ color: 0x8ff2c8, size: .018, transparent: true, opacity: .48 }));
    scene.add(particles);

    const resize = () => {
      const { clientWidth, clientHeight } = host;
      renderer.setSize(clientWidth, clientHeight, false);
      camera.aspect = clientWidth / Math.max(clientHeight, 1);
      camera.updateProjectionMatrix();
    };
    const pointer = (event: PointerEvent) => uniforms.uPointer.value.set(event.clientX / innerWidth, 1 - event.clientY / innerHeight);
    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', pointer, { passive: true });

    const cameraMotion = gsap.timeline({ scrollTrigger: { trigger: '.revenue-leak-page', start: 'top top', end: 'bottom bottom', scrub: 1.2 } })
      .to(camera.position, { z: 4.25, x: .55, ease: 'none' }, 0)
      .to(liquid.rotation, { z: .24, x: .08, ease: 'none' }, 0)
      .to(particles.rotation, { z: 1.4, y: .55, ease: 'none' }, 0);
    gsap.utils.toArray<HTMLElement>('[data-luxury-reveal]').forEach((element) => {
      gsap.fromTo(element, { y: 70, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 86%', once: true } });
    });

    const clock = new THREE.Clock();
    let frame = 0;
    const draw = () => {
      uniforms.uTime.value = clock.getElapsedTime();
      particles.rotation.z += .00035;
      renderer.render(scene, camera);
      frame = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(frame);
      cameraMotion.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', pointer);
      liquid.geometry.dispose();
      (liquid.material as THREE.Material).dispose();
      particlesGeometry.dispose();
      (particles.material as THREE.Material).dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);
  return <div className="luxury-webgl" ref={mount} aria-hidden="true" />;
}
