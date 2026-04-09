'use client'; // Required for GSAP/animations if you add any

import { MQ_ITEMS } from '@/lib/data/constants';

// Triple the items for seamless infinite loop
const ITEMS = [...MQ_ITEMS, ...MQ_ITEMS, ...MQ_ITEMS];

export default function Marquee() {
  return (
    <div className="py-5 overflow-hidden relative">
      {/* Edge fades */}
      <div
        className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right,#20142C,transparent)' }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left,#20142C,transparent)' }}
      />
      <div className="mq-t">
        {ITEMS.map((item, i) => (
          <div key={item + i} className="flex items-center shrink-0">
            <span
              className="font-mono text-xs tracking-widest uppercase px-6"
              style={{ color: 'rgba(237,224,240,.9)' }}
            >
              {item}
            </span>
            <span
              style={{
                width: 3,
                height: 3,
                borderRadius: '50%',
                background: '#EE4540',
                opacity: 0.35,
                flexShrink: 0,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}