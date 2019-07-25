import styled from "styled-components"

export const Button = styled.button``

const icon = styled(Button)``

const back = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #eef2f9;
`

Button.Icon = icon
Button.Back = back
