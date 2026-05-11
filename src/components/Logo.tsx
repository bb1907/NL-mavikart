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
      <rect width="32" height="32" rx="10" fill="#21468B" />
      {/* Background shape - Sun/Heart accent */}
      <circle cx="22" cy="10" r="6" fill="#FF4F00" fillOpacity="0.2" />
      
      {/* Father figure */}
      <circle cx="11" cy="12" r="3.5" fill="#FF4F00" />
      <path d="M11 16.5C8 16.5 6 19.5 6 24C6 25.1 6.9 26 8 26H14C15.1 26 16 25.1 16 24C16 19.5 14 16.5 11 16.5Z" fill="#FF4F00" />
      
      {/* Mother figure */}
      <circle cx="21" cy="13" r="3" fill="#FFB703" />
      <path d="M21 17C18.5 17 17 19.5 17 23C17 24.1 17.9 25 19 25H23C24.1 25 25 24.1 25 23C25 19.5 23.5 17 21 17Z" fill="#FFB703" />
      
      {/* Child figure */}
      <circle cx="16" cy="18" r="2.5" fill="white" />
      <path d="M16 21C14.5 21 13.5 22.5 13.5 24.5C13.5 25.3 14.2 26 15 26H17C17.8 26 18.5 25.3 18.5 24.5C18.5 22.5 17.5 21 16 21Z" fill="white" />
    </svg>
  );
}
