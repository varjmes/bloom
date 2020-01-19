import React from 'react';
import { createGlobalStyle } from 'styled-components'
import { AppContainer, AppHeader, AppTitle, AppIntro } from './styles'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`

const App = () => (
  <>
    <GlobalStyle />
    <AppContainer>
      <AppHeader>
        <AppTitle>Welcome to React</AppTitle>
      </AppHeader>
      <AppIntro>
        To get started, edit <code>src/App.js</code> and save to reload.
       </AppIntro>
    </AppContainer>
  </>
)

export default App
