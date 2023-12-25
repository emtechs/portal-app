import { createTheme } from '@mui/material'
import { ptBR } from '@mui/material/locale'

export const Theme = createTheme(
  {
    palette: {
      primary: {
        main: '#3d2b72',
        contrastText: '#fefefe',
      },
      secondary: {
        main: '#ea802a',
        contrastText: '#fefefe',
      },
      background: { default: '#c7b8b7', paper: '#fefefe' },
    },
  },
  ptBR,
)
