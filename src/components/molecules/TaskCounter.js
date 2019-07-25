import React from "react"
import styled, { css } from "styled-components"
import { Text, Barge } from "../atoms"

const TaskCounter = ({ title, type }) => {
  return (
    <TaskCounterWrap type={type}>
      <Text>{title}</Text>
      <Barge type={type}>56</Barge>
    </TaskCounterWrap>
  )
}

export default TaskCounter

const TaskCounterWrap = styled.div`
  display: flex;
  align-content: center;
  color: ${({ theme }) => theme.font.color[4]};
  cursor: pointer;
  ${Text} {
    margin-right: 10px;
  }

  ${p =>
    p.type === "rush" &&
    css`
      :hover {
        color: ${({ theme }) => theme.colors.alert};
      }
    `}

  ${p =>
    p.type === "regular" &&
    css`
      :hover {
        color: ${({ theme }) => theme.colors.normal};
      }
    `}
`
