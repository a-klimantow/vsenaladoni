import React from "react"
import styled from "styled-components"
import { Divider } from "../atoms"
import MenuItem from "../molecules/MenuItem"

const Menu = () => {
  return (
    <MenuWrap>
      <MenuItem to="/" title="Рабочий стол" icon="desktop" />
      <MenuItem to="/control" title="Управление" icon="control" />
      <MenuItem to="/monitoring" title="Мониторинг" icon="monitoring" />
      <MenuItem to="/reports" title="Отчеты" icon="reports" />
      <Divider />
      <MenuItem to="/profile" title="Профиль" icon="profile" />
      <MenuItem to="/messages" title="Оповещения" icon="messages" />
      <MenuItem to="/settings" title="Настройки" icon="settings" />
      <MenuItem to="/login" title="Выход" icon="login" />
    </MenuWrap>
  )
}

export default Menu

const MenuWrap = styled.nav`
  ${Divider} {
    margin: 30px 0;
  }

  > :last-child {
    margin-top: 30px;
  }
`
