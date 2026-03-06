/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                apple: {
                    blue: '#0071e3',
                    gray: '#1d1d1f',
                    silver: '#f5f5f7',
                    slate: '#8e8e93'
                }
            },
            animation: {
                'liquid-slow': 'liquid 25s infinite linear',
                'fade-up': 'fadeUp 1s cubic-bezier(0.4, 0, 0.2, 1) forwards',
            },
            keyframes: {
                liquid: {
                    '0%': { transform: 'rotate(0deg) scale(1)' },
                    '50%': { transform: 'rotate(180deg) scale(1.15)' },
                    '100%': { transform: 'rotate(360deg) scale(1)' },
                },
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(40px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}
