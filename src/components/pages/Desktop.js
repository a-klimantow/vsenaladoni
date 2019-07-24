import React from "react"
import styled from "styled-components"
import { Header, Grid } from "../atoms"
import Task from "../molecules/Task"

const Desktop = () => {
  return (
    <DesktopWrap>
      <Header.H1 color={4}>Новые задачи</Header.H1>
      <Grid.Task>
        <Task />
        <Task />
        <Task />
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
