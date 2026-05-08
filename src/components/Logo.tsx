import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = "", size = 32 }: LogoProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="32" height="32" rx="8" fill="#21468B" />
      <path 
        d="M16 6C13 6 10 9 10 12C10 16 16 26 16 26C16 26 22 16 22 12C22 9 19 6 16 6Z" 
        fill="#FF4F00" 
      />
      <circle cx="16" cy="12" r="2.5" fill="white" />
    </svg>
  );
}
