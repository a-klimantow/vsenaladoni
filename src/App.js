import React from "react"
import { ThemeProvider } from "styled-components"
import { BrowserRouter as Router, Route } from "react-router-dom"
import GlobalStyle from "./lib/global-style"
import theme from "./lib/theme"
import Layout from "./components/organisms/Layout"
import { Desktop, Control } from "./components/pages"

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <>
          <Layout>
            <Route path="/" component={Desktop} exact />
            <Route path="/control" component={Control} />
          </Layout>
          <GlobalStyle />
        </>
      </ThemeProvider>
    </Router>
  )
}

export default App
