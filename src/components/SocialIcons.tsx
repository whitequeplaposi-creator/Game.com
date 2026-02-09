import React from 'react';

/**
 * Social media icons with official brand colors and designs
 */

export const FacebookIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
    <svg viewBox="0 0 24 24" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#1877F2" />
        <path d="M16.5 12.75h-2.75V21h-3.5v-8.25H8.5V10h1.75V8.25c0-2.5 1.5-3.75 3.75-3.75 1 0 2 .25 2 .25v2.25h-1.125c-1.125 0-1.375.625-1.375 1.375V10h2.5l-.5 2.75z" fill="white" />
    </svg>
);

export const InstagramIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
    <svg viewBox="0 0 24 24" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="instagramGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FD5949" />
                <stop offset="50%" stopColor="#D6249F" />
                <stop offset="100%" stopColor="#285AEB" />
            </linearGradient>
        </defs>
        <rect width="24" height="24" rx="6" fill="url(#instagramGradient)" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="white" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="white" />
        <rect x="5" y="5" width="14" height="14" rx="3" fill="none" stroke="white" strokeWidth="2" />
    </svg>
);

export const TwitterIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
    <svg viewBox="0 0 24 24" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#000000" />
        <path d="M18.244 7.25h2.308l-5.04 5.76 5.927 7.84h-4.642l-3.635-4.755-4.159 4.755H4.36l5.39-6.16L4 7.25h4.758l3.286 4.345L16.489 7.25zm-.81 11.97h1.28L9.074 8.56H7.7l9.734 10.66z" fill="white" />
    </svg>
);

export const TikTokIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
    <svg viewBox="0 0 24 24" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#000000" />
        <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" fill="white" />
    </svg>
);

export const YouTubeIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
    <svg viewBox="0 0 24 24" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#FF0000" />
        <path d="M19.615 8.356c-.195-.73-.77-1.305-1.5-1.5C16.79 6.5 12 6.5 12 6.5s-4.79 0-6.115.356c-.73.195-1.305.77-1.5 1.5C4 9.68 4 12.5 4 12.5s0 2.82.385 4.144c.195.73.77 1.305 1.5 1.5C7.21 18.5 12 18.5 12 18.5s4.79 0 6.115-.356c.73-.195 1.305-.77 1.5-1.5.385-1.324.385-4.144.385-4.144s0-2.82-.385-4.144z" fill="white" />
        <path d="M10.5 15.5l4.5-3-4.5-3v6z" fill="#FF0000" />
    </svg>
);

export const PinterestIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
    <svg viewBox="0 0 24 24" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#E60023" />
        <path d="M12.017 5c-3.866 0-5.817 2.768-5.817 5.076 0 1.397.527 2.64 1.657 3.104.185.076.351.003.405-.202.037-.142.125-.495.164-.643.053-.2.033-.27-.116-.444-.324-.379-.531-.87-.531-1.566 0-2.018 1.51-3.826 3.933-3.826 2.144 0 3.323 1.31 3.323 3.06 0 2.303-1.019 4.246-2.532 4.246-.836 0-1.462-.691-1.261-1.54.24-1.012.705-2.104.705-2.835 0-.654-.351-1.2-1.077-1.2-.854 0-1.54.884-1.54 2.068 0 .753.255 1.263.255 1.263l-1.026 4.347c-.305 1.291-.046 2.873-.024 3.033.013.095.134.118.189.046.078-.103 1.088-1.35 1.435-2.597.098-.353.563-2.199.563-2.199.278.53 1.091.996 1.956.996 2.574 0 4.32-2.348 4.32-5.489C17.001 7.128 14.961 5 12.017 5z" fill="white" />
    </svg>
);

export const GooglePlayIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
    <svg viewBox="0 0 24 24" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="playBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4285F4" />
                <stop offset="100%" stopColor="#2A75F3" />
            </linearGradient>
            <linearGradient id="playGreen" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#34A853" />
                <stop offset="100%" stopColor="#0F9D58" />
            </linearGradient>
            <linearGradient id="playYellow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FBBC04" />
                <stop offset="100%" stopColor="#F9AB00" />
            </linearGradient>
            <linearGradient id="playRed" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#EA4335" />
                <stop offset="100%" stopColor="#E53935" />
            </linearGradient>
        </defs>
        {/* Blue left triangle */}
        <path d="M4 3.5 L4 20.5 L13 12 Z" fill="url(#playBlue)" />
        {/* Green top triangle */}
        <path d="M4 3.5 L13 12 L18.5 9 L6 2 Z" fill="url(#playGreen)" />
        {/* Yellow bottom triangle */}
        <path d="M4 20.5 L13 12 L18.5 15 L6 22 Z" fill="url(#playYellow)" />
        {/* Red right triangle */}
        <path d="M13 12 L18.5 9 L18.5 15 Z" fill="url(#playRed)" />
    </svg>
);
