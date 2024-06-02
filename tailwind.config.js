const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
	content: ["**/*.{html,php,js}"],
	darkMode: "false",
	important: true,
  theme: {
		container: {
      center: true,
			padding: '15px',
    },
		colors: {
      primary:{
				DEFAULT: '#0070F0',
				900: '#197ef1',
				400: '#b7d5f9',
				100: '#E8F2FE',
				20: '#C8DFFA'
			},
			secondary:{
				DEFAULT:'#1F384F',
				900:'#1A7EF1',
				100:'#E8F2FE'
			},
			white:'#fff',
			black:'#000',
			pictonBlue:"#2EC5CE",
			green:"#3CBA79",
			blue:"#1F284F",
			grey:{
				100:"#FAFBFC",
				200:"#F4F5F7",
				500:"#E1E8F0",
				600:"#B7BFC7",
				700:"#575757"
			},
			'warm-blue':"#5956E9",
			pink:{
				DEFAULT: '#FFDCE0',
			},
			yellow:{
				DEFAULT: '#FEF3D9',
			}
    },
		screens: {
      'sm': '641px',
      'md': '768px',
      'tablet': '992px',
      'lg': '1025px',
      'xl': '1281px',
      '2xl': '1537px',
    },
    extend: {
			fontFamily: {
				'body': ['"Poppins"', ...defaultTheme.fontFamily.sans],
			},
			boxShadow: {
        'shadow-sm': '0 4px 4px rgba(0, 0, 0, 0.04)',
        'shadow-md': '0 4px 4px rgba(0, 0, 0, 0.25)',
        'shadow-lg': '0 16px 8px rgba(81, 84, 88, 0.08)',
        'shadow-xl': '0 20px 10px rgba(41, 41, 42, 0.07)',
        'shadow-2xl': '0 20px 4px rgba(0, 0, 0, 0.08)',
      },
			lineHeight:{
				'leading-tight':1.2,
				'leading-snug':1.3,
				'leading-relaxed':1.6,
				'leading-1-7':1.7,
			}
		},
  },
  plugins: [
		require('tailwindcss'),
    require('autoprefixer'),
	]
}