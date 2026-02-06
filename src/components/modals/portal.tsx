// components/ui/Portal.tsx
'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: React.ReactNode;
  selector?: string;
}

export default function Portal({ children, selector = '#portal' }: PortalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Create portal root if it doesn't exist
    if (!document.querySelector(selector)) {
      const portalRoot = document.createElement('div');
      portalRoot.id = selector.replace('#', '');
      document.body.appendChild(portalRoot);
    }

    return () => setMounted(false);
  }, [selector]);

  if (!mounted || typeof window === 'undefined') return null;

  const portalRoot = document.querySelector(selector);
  return portalRoot ? createPortal(children, portalRoot) : null;
}