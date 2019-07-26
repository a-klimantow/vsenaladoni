import React from "react"
import styled from "styled-components"
import { Logo, Divider } from "../atoms"
import { User } from "../molecules"
import { Menu } from "."

const Drawer = () => {
  return (
    <DrawerWrap>
      <Logo>MVP</Logo>
      <Divider />
      <User />
      <Menu />
    </DrawerWrap>
  )
}

export default Drawer

const DrawerWrap = styled.aside`
  grid-area: drawer;
  width: 260px;
  background: #ffffff;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.08);
  z-index: 10;
`
