import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        "header" : "rgba(237, 242, 247, 1)"
      },
      textColor: {
        "select" : "rgba(0, 153, 204, 1)",
        "unselect" : "rgba(74, 85, 104, 1)",
      },
      borderColor: {
        "select" : "rgba(0, 153, 204, 1)",
      }
    },
  },
  plugins: [],
}
export default config
