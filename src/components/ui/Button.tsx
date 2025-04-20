import React from 'react'

interface ButtonProps {
    text?: string;
    size?: 'lg' | 'sm';
    variant?: 'outline' | 'default';
    className?: string;
    asChild?: boolean;
    children?: React.ReactNode;
}

function Button({ text, size, variant, className, asChild, children }: ButtonProps) {
    return (
        <button className={`
      ${size === 'lg' ? 'text-lg py-3 px-6' : 'text-sm py-2 px-4'}
        ${variant === 'outline' ? 'border border-gray-700 text-white' : 'bg-[#3EEAAE] text-black'}
        ${className}
        rounded-lg
        hover:bg-opacity-90
        transition duration-200
        ${asChild ? 'flex items-center justify-center' : ''}
    `}
            type='button'
        >
            {text || children}
        </button>
    )
}

export default Button