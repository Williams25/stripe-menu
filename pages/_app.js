import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
   *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    min-height: 100%;
    background-color: #202020;
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: 'Roboto', -apple-system, system-ui, sans-serif;
  }
  ul {
    list-style: none;
    padding-left: 0;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
