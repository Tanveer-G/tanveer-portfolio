import React, { ReactNode } from 'react';

interface GradientBorderProps {
  children: ReactNode;
  borderWidth?: string;
  borderGradient?: string;
  opacity?: string;
  borderRadius?: string;
  className?: string;
}
export default function GradientBtnLayout({
  children,
  borderWidth = '1px',
  borderGradient = 'conic-gradient(from 180deg at 50% 50%, #212429 -198deg, #212429 133.2deg, rgba(255, 255, 255, 0.5) 158.4deg, #212429 162deg, #212429 493.2deg)',
  opacity = '100%',
  borderRadius = '999rem',
  className = '',
}: Readonly<GradientBorderProps>) {
  return (
    <div
      className={`rounded-border ${className}`}
      style={{
        ['--border-width' as string | number]: borderWidth,
        ['--border-gradient' as string | number]: borderGradient,
        ['--opacity' as string | number]: opacity,
        borderRadius: borderRadius,
      }}
    >
      {children}
    </div>
  );
}
