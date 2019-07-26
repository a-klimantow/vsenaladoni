import React, { Component } from "react"
import styled, { css } from "styled-components"

import SelectItem from "./SelectItem"

export default class extends Component {
  state = {
    isActive: false
  }

  handleClick = () => {
    this.setState(({ isActive }) => ({ isActive: !isActive }))
  }

  closeBlock = () => {
    this.setState(() => ({ isActive: false }))
  }

  render() {
    const { children, data = [] } = this.props
    const { isActive } = this.state
    console.log(isActive)
    return (
      <Select active={isActive} onMouseLeave={this.closeBlock}>
        <button onClick={this.handleClick}>{children}</button>
        <SelectBlock active={isActive}>
          <SelectItem type="checkbox" id={Math.random()} title="Выбрать все" />
          {data.map(item => (
            <SelectItem
              type="checkbox"
              key={item.title}
              id={item.id}
              title={item.title}
            />
          ))}
        </SelectBlock>
      </Select>
    )
  }
}

const Select = styled.div`
  display: inline-block;
  button {
    padding: 10px 15px;
    border: 2px solid #c2cfe0;
    border-radius: 4px;
    margin-bottom: 10px;
    font-size: 14px;
    color: #90a0b7;
    background-color: #fff;
    outline: none;
    &::after {
      content: "";
      display: inline-block;
      width: 8px;
      height: 8px;
      border-left: 1px solid #90a0b7;
      border-bottom: 1px solid #90a0b7;
      margin-left: 10px;
      transform: rotate(-45deg) translateY(-4px);
    }
    &:hover {
      color: #7499f8;
      border-color: #7499f8;
      ::after {
        border-color: #7499f8;
      }
    }
    ${p =>
      p.active &&
      css`
        color: #7499f8;
        border-color: #7499f8;
        border-radius: 4px 4px 0 0;
        &::after {
          border-color: #7499f8;
        }
      `}
  }
`

const SelectBlock = styled.div`
  display: ${p => (p.active ? "block" : "none")};
  background: #ffffff;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0px 0px 10px 10px;
  margin-top: -10px;
  padding: 20px;
  position: absolute;
  z-index: 10;
`
