import React, { memo } from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

import { CssBaseline } from '@material-ui/core'


function createMuiThemeSequence(...args) {
  const theme = args.reduce((prevTheme, arg) => {
    const option = (typeof arg === "function") ? arg(prevTheme) : arg
    return createMuiTheme({ ...prevTheme, ...option })
  }, createMuiTheme())
  return theme
}


const theme = createMuiThemeSequence(
  () => ({
    palette: {
      primary: {
        main: '#29354c',
        light: '#f2f2f2'
        // contrastText: 'red'
      },
      accent: {
        main: '#fed602'
      },
      secondary: {
        main: '#3777A4',   // icon color
        light: '#4AACDE',  // border
      },
      error: {
        main: '#fc4f52'
      },
      highlight: {
        main: '#2f80ed'
      },
      disabled: {
        main: '#b8c3d9'
      },
      text: {
        secondary: '#6f8190'
      },
      bodyBackground: '#f4f7f9',
      progressBar: {
        main: '#2c41c2',
        light: '#d4e1ee'
      },
    }
  }),

  prevTheme => ({
    typography: {
      fontFamily: [
        "Microsoft JhengHei",
        '"Noto Sans TC"',
        "Roboto", 
        "Helvetica", 
        "Arial", 
        'sans-serif',
      ].join(','),
      useNextVariants: true,
      h2: { fontWeight: 'medium' },
      h3: { fontWeight: 'medium' },
      h6: { fontSize: '24px', color: prevTheme.palette.primary.main, },
      subtitle1: {
        fontSize: '20px', color: prevTheme.palette.primary.main, fontWeight: prevTheme.typography.fontWeightMedium
      },
      subtitle2: {
        fontSize: '16px',
        color: prevTheme.palette.primary.main,
        fontWeight: 500
      },
      body1: {  // typhgraphy default
        fontSize: '16px',
        color: prevTheme.palette.primary.main
      },
      body2: {  // html default
        fontSize: '14px',
        color: prevTheme.palette.text.secondary,
      },
      caption: {
        fontSize: '12px',
        color: prevTheme.palette.text.secondary,
      },
    }
  }),

  () => ({
    props: {
      MuiTypography: {
        variantMapping: {
          h1: 'h2',
          h2: 'h2',
          h3: 'h2',
          h4: 'h2',
          h5: 'h2',
          h6: 'h2',
          subtitle1: 'h2',
          subtitle2: 'h2',
          body1: 'span',
          body2: 'span'
        }
      },
    }
  }),

  () => ({
    overrides: {
      MuiButton: {
        root: {
          textTransform: 'inherit'
        }
      },
      MuiTypography: {
        root: {
          verticalAlign: 'middle'
        }
      },
      MuiTabs: {
        root: {
          height: 32,
          minHeight: 32
        }
      },
      MuiTab: {
        root: {
          height: 32,
          minHeight: 32
        }
      }
      // MuiOutlinedInput: {
      //   root: {
      //     color: 'red'
      //   }
      // }
    }
  }),
)
console.log("THEME", theme)

export default theme
