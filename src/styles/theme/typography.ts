import { PaletteMode } from '@mui/material'
import { TypographyOptions } from '@mui/material/styles/createTypography'
import { Merriweather, Raleway } from 'next/font/google'

interface Props {
  sm: number
  md: number
  lg: number
}

export function remToPx(value: string) {
  return Math.round(parseFloat(value) * 16)
}

export function pxToRem(value: number) {
  return `${value / 16}rem`
}

export function responsiveFontSizes({ sm, md, lg }: Props) {
  return {
    '@media (min-width:600px)': {
      fontSize: pxToRem(sm)
    },
    '@media (min-width:900px)': {
      fontSize: pxToRem(md)
    },
    '@media (min-width:1200px)': {
      fontSize: pxToRem(lg)
    }
  }
}
const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap'
})

const raleway = Raleway({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap'
})
export const primaryFont = merriweather
export const secondaryFont = raleway

export const typography = (palette: PaletteMode): TypographyOptions => {
  return {
    fontFamily: primaryFont.style.fontFamily,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    fontSize: "2.5rem",
  },
  h2: {
    fontWeight: 600,
    fontSize: "2rem",
  },
  h3: {
    fontWeight: 600,
    fontSize: "1.75rem",
    },
    subtitle1: {
      fontWeight: 600,
      lineHeight: 1.5,
      fontSize: pxToRem(16)
    },
    subtitle2: {
      fontWeight: 600,
      lineHeight: 22 / 14,
      fontSize: pxToRem(14)
    },
    body1: {
    fontSize: "1rem",
    fontWeight: 400,
    color: "hsla(0, 15%, 37%, 1.00)",
    },
    body2: {
    fontSize: "0.875rem",
    color: "hsla(0, 0%, 100%, 1.00)",
    },
    caption: {
      lineHeight: 1.5,
      fontSize: pxToRem(12)
    },
    overline: {
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: pxToRem(12),
      textTransform: 'uppercase'
    },
    button: {
    fontWeight: 600,
    textTransform: "uppercase",
    }
  }
}
