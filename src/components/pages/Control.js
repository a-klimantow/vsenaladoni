import React, { Component } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Icon, FilterPanel, Button, Grid } from "../atoms"
import TaskCounter from "../molecules/TaskCounter"
import Task from "../molecules/Task"
import TaskTable from "../molecules/Task/TaskTable"
import { tasks } from "../../data"

class Control extends Component {
  state = {
    grid: "tail"
  }
  goToTaskDetails = e => {
    // this.props.history.replace("/")
    console.log(e)
  }

  render() {
    const { history } = this.props
    return (
      <ControlWrap>
        <div>любая дата</div>
        <FilterPanel>
          <TaskCounter title="Все задачи" />
          <TaskCounter title="Срочные" type="rush" />
          <TaskCounter title="Обычные" type="regular" />
          <div style={{ marginLeft: "auto" }}>
            <Button.Icon
              onClick={() => this.setState({ grid: "tile" })}
              name="click"
            >
              <Icon icon="tail" />
            </Button.Icon>
            <Button.Icon onClick={() => this.setState({ grid: "line" })}>
              <Icon icon="line" />
            </Button.Icon>
          </div>
        </FilterPanel>

        {this.state.grid === "line" ? (
          <TaskTable history={history} />
        ) : (
          <Grid.Task>
            {tasks.map(item => (
              <Link to={`/control/${item.id}`} key={item.id}>
                <Task title={item.title} />
              </Link>
            ))}
          </Grid.Task>
        )}
      </ControlWrap>
    )
  }
}

export default Control

const ControlWrap = styled.section``
