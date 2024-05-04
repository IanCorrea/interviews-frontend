
import { ThemeProvider }  from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'

import AppProvider from './hooks';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppProvider>
        <BrowserRouter>
        <Router />
        </BrowserRouter>
        <GlobalStyle />
      </AppProvider>
    </ThemeProvider>
  )
}
