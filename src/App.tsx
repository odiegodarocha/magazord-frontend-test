import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { RepositoriesProvider } from './contexts/RepositoriesContext'
import { Home } from './pages/Home'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <RepositoriesProvider>
        <Header />
        <Home />
      </RepositoriesProvider>
    </ThemeProvider>
  )
}
