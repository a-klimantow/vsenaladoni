import React from "react"
import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { Header, Icon } from "../atoms"

const MenuItem = ({ to, icon, title, exact }) => {
  return (
    <ItemLinkWrap to={to} exact={exact}>
      <Icon className="icon" icon={icon} />
      <Header.H2 color={4}>{title}</Header.H2>
    </ItemLinkWrap>
  )
}

export default MenuItem

const ItemLinkWrap = styled(NavLink)`
  display: block;
  color: inherit;
  text-decoration: none;
  padding: 15px 0;
  padding-left: 35px;
  display: flex;
  align-items: center;

  > :first-child {
    margin-right: 20px;
  }

  &.active {
    color: red;

    .icon > svg {
      stroke: ${({ theme }) => theme.colors.primary};
    }

    ${Header.H2} {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`
