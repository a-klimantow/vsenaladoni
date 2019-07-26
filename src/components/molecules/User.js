import React from "react"
import styled from "styled-components"
import { Avatar, Header, Text, Icon } from "../atoms"
import foto from "../../lib/img/foto.jpg"

const User = ({
  name = "Стрелкова А.Н.",
  email = "strelcovaan@gmail.com",
  status = true
}) => {
  return (
    <UserWrap>
      <Avatar>
        {/* <Icon icon="avatar" /> */}
        <img src={foto} alt="foto" />
      </Avatar>
      <div className="info">
        <Header.H1 color={4}>{name}</Header.H1>
        <Text small color={5}>
          {email}
        </Text>
        <Text.Status small work={status}>
          {status ? "В работе" : "В отпуске"}
        </Text.Status>
      </div>
    </UserWrap>
  )
}

export default User

const UserWrap = styled.div`
  display: flex;
  align-items: center;
  padding-left: 35px;
  margin: 30px 0;

  .info {
    margin-left: 10px;
  }
`
