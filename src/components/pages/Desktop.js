import React from "react"
import styled from "styled-components"
import { Header, Grid } from "../atoms"

const Desktop = () => {
  return (
    <DesktopWrap>
      <Header.H1 color={4}>Новые задачи</Header.H1>
      <Grid.Task>
        <div>task</div>
        <div>task</div>
        <div>task</div>
      </Grid.Task>
    </DesktopWrap>
  )
}

export default Desktop

const DesktopWrap = styled.section`
  ${Header.H1} {
    margin-bottom: 20px;
  }
`
