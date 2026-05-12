/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'Inter',
					'-apple-system',
					'BlinkMacSystemFont',
					'PingFang TC',
					'Noto Sans TC',
					'sans-serif',
				],
				mono: ['JetBrains Mono', 'SF Mono', 'Menlo', 'monospace'],
			},
			colors: {
				glass: {
					DEFAULT: 'rgba(255,255,255,0.06)',
					strong: 'rgba(255,255,255,0.10)',
					border: 'rgba(255,255,255,0.12)',
				},
			},
			backdropBlur: {
				xs: '2px',
			},
			animation: {
				'gradient-shift': 'gradient-shift 18s ease infinite',
				float: 'float 8s ease-in-out infinite',
				'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
			},
			keyframes: {
				'gradient-shift': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '0.4' },
					'50%': { opacity: '0.8' },
				},
			},
		},
	},
	plugins: [],
}
