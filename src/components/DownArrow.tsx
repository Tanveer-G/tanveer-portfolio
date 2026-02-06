import React from 'react';

interface DownArrowProps {
  size?: number;         // Optional size prop (default 24)
  color?: string;        // Optional color prop (default 'currentColor')
  rotate?: boolean;      // Optional rotate prop (default false)
}

const DownArrow: React.FC<DownArrowProps> = ({ size = 24, color = 'currentColor', rotate = false }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform ${rotate ? 'rotate-180' : ''}`} // Rotate if needed
    >
      <path d="M6 9l6 6 6-6"></path>
    </svg>
  );
};

export default DownArrow;
