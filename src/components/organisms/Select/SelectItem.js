import React from "react"
import styled from "styled-components"

export default ({ type, id, title }) => {
  return (
    <SelectItem>
      <input type={type} id={id} />
      <label className={id} htmlFor={id}>
        {title}
      </label>
    </SelectItem>
  )
}

const SelectItem = styled.div`
  label {
    padding: 5px 0;
    padding-left: 20px;
    display: flex;
    align-items: center;
    color: #90a0b7;
    cursor: pointer;
    position: relative;

    &:first-child {
      color: red;
    }

    &::before,
    &::after {
      content: "";
      display: inline-block;
      border-radius: 4px;
      position: absolute;
      left: 0;
      transform: translateX(-50%);
    }

    &::before {
      width: 15px;
      height: 15px;
      border: 1px solid #c2cfe0;
    }
  }

  input {
    display: none;
  }

  input:checked + label::after {
    width: 9px;
    height: 9px;
    background-color: #258ffb;
  }
`
