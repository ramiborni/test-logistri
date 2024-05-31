import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default <Partial<Config>>{
  content: [],
  theme: {
    extend: {},
    colors: {
      ...colors,
      smoke: '#F7F7F7',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1560px',
      wide: '2500px',
    },
  },
  plugins: [],
}
