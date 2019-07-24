import React from "react"
import styled from "styled-components"
import { Drawer, Header } from "."

const Layout = ({ children }) => {
  return (
    <Container>
      <Drawer />
      <Header />
      <main className="main">{children}</main>
    </Container>
  )
}

export default Layout

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-areas:
    "drawer header"
    "drawer content";
  grid-template-columns: auto 1fr;
  grid-template-rows: 60px 1fr;

  .main {
    padding: 30px;
  }
`
