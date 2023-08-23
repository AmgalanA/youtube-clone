/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			colors: {
				primary: '#FF7652',
				purple: '#6C5ECF',
				'light-blue': '#32ABE2',
				gray: {
					400: '#9898ad',
					500: '#6B6B78',
					600: '#5B5B6B',
					800: '#353340',
					900: '#272532'
				}
			}
		}
	},
	plugins: []
}
