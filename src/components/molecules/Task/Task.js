import React from "react"
import styled from "styled-components"
import { Paper, Text, Header, Divider, Icon, Step } from "../../atoms"

const Task = ({ title, id }) => {
  const task = (
    <TaskTail>
      <TaskHeader>
        <Text color={5} small>
          {id}
        </Text>
        <Header.H2 color={4}>{title}</Header.H2>
        <Text color={5} small>
          20.05.2019
        </Text>
      </TaskHeader>
      <Divider />
      <TaskBody>
        <div style={{ marginBottom: 40 }}>
          <Text color={3}>Этап:</Text>
          <Step>4</Step>
          <Header.H2 color={2}>Замена прибора</Header.H2>
        </div>
        <div className="object">
          <Icon icon="place" />
          <Text>Пр. Химиков 53/1</Text>
        </div>
      </TaskBody>
    </TaskTail>
  )

  return <>{task}</>
}

export default Task

const TaskTail = styled(Paper)`
  position: relative;
  &::before {
    content: "";
    display: block;
    width: 30px;
    height: 3px;
    border-radius: 5px 5px 0 0;
    background-color: ${({ theme }) => theme.colors.normal};
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`

const TaskHeader = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${Header.H2} {
    margin-left: 7px;
    margin-right: auto;
  }
`
const TaskBody = styled.div`
  min-height: 100px;
  padding: 20px 15px 28px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;

  .object {
    color: ${({ theme }) => theme.colors.primary};
  }

  > div {
    display: flex;
    align-items: center;
    > * {
      margin-right: 8px;
    }
  }
`
