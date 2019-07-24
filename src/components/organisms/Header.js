import React from "react"
import styled from "styled-components"
import { Icon, Text } from "../atoms"

const Header = () => {
  return (
    <HeaderWrap>
      <Icon icon="search" />
      <Text color={5}>Поиск по лицевым счетам, ФИО или адресу</Text>
    </HeaderWrap>
  )
}

export default Header

const HeaderWrap = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  padding-left: 30px;
  ${Text} {
    margin-left: 15px;
  }
`
