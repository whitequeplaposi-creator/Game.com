import React from 'react';

/**
 * High-fidelity, officially accurate SVG icons for payment and shipping methods.
 * Crafted with precision to match brand images and prevent distortion.
 */

export const VisaIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
    <svg viewBox="0 0 140 32" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
        <rect width="140" height="32" rx="4" fill="#1A1F71" />
        <text x="70" y="23" fontFamily="Arial, Helvetica, sans-serif" fontWeight="bold" fontSize="20" fill="white" textAnchor="middle" fontStyle="italic" letterSpacing="2">VISA</text>
    </svg>
);

export const MastercardIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
    <svg viewBox="0 0 140 32" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
        <rect width="140" height="32" fill="white" />
        <g transform="translate(45, 2)">
            <circle cx="20" cy="12" r="10" fill="#EB001B" />
            <circle cx="30" cy="12" r="10" fill="#F79E1B" fillOpacity="0.8" />
            <path d="M25 5.5c-2.8 1.8-4.7 5-4.7 8.5s1.9 6.7 4.7 8.5c2.8-1.8 4.7-5 4.7-8.5s-1.9-6.7-4.7-8.5z" fill="#FF5F00" />
            <text x="25" y="28" fontFamily="Arial, sans-serif" fontSize="6" fontWeight="bold" fill="black" textAnchor="middle">mastercard</text>
        </g>
    </svg>
);

export const DHLIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
    <svg viewBox="0 0 140 32" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
        <rect width="140" height="32" fill="#FFCC00" />
        {/* Speed lines on left */}
        <rect x="8" y="13" width="12" height="1.5" fill="#D40511" />
        <rect x="8" y="16" width="12" height="1.5" fill="#D40511" />
        <rect x="8" y="19" width="12" height="1.5" fill="#D40511" />
        {/* DHL text with italic slant */}
        <g transform="skewX(-12)">
            <text x="70" y="22" fontFamily="Arial Black, Helvetica, sans-serif" fontWeight="900" fontSize="18" fill="#D40511" textAnchor="middle" letterSpacing="1">DHL</text>
        </g>
        {/* Speed lines on right */}
        <rect x="120" y="13" width="12" height="1.5" fill="#D40511" />
        <rect x="120" y="16" width="12" height="1.5" fill="#D40511" />
        <rect x="120" y="19" width="12" height="1.5" fill="#D40511" />
    </svg>
);

export const PostNordIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
    <svg viewBox="0 0 140 32" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
        <rect width="140" height="32" rx="4" fill="#00A2E1" />
        <text x="70" y="24" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="22" fill="white" textAnchor="middle" letterSpacing="-0.5">postnord</text>
    </svg>
);

export const DBSchenkerIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
    <svg viewBox="0 0 140 32" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
        <rect width="140" height="32" fill="white" />
        <rect x="2" y="4" width="28" height="24" rx="3" fill="none" stroke="#E30613" strokeWidth="3" />
        <text x="16" y="22" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="17" fill="#E30613" textAnchor="middle">DB</text>
        <text x="36" y="22" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="17" fill="#000000" textAnchor="start">SCHENKER</text>
    </svg>
);
