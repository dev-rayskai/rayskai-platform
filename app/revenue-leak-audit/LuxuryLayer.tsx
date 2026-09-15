'use client';

import dynamic from 'next/dynamic';

const LuxuryWebGL = dynamic(() => import('./LuxuryWebGL'), {
  ssr: false,
  loading: () => null,
});

export default function LuxuryLayer() {
  return <LuxuryWebGL />;
}
