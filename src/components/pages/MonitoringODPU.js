import React from "react"
import styled from "styled-components"
import { Button, Icon, Paper, Header } from "../atoms"
import Chart from "../organisms/Chart"

const MonitoringODPU = props => {
  return (
    <div>
      <Button.Back onClick={() => props.history.goBack()}>
        <Icon icon="arrow-left" size={10} />
      </Button.Back>
      <Info>
        <Header.H1>Информация</Header.H1>
        <ul>
          <li>
            <Header.H2>Узел учета:</Header.H2>
            4566874473
          </li>
          <li>
            <Header.H2>Тип прибора:</Header.H2>
            Вычислитель
          </li>
          <li>
            <Header.H2>Серийный номер вычислителя:</Header.H2>
            2929291
          </li>
          <li>
            <Header.H2>Серийный номер прибора:</Header.H2>2929291
          </li>
          <li>
            <Header.H2>Дата выпуска прибора:</Header.H2>23/09/2018
          </li>
          <li>
            <Header.H2>Дата ввода в эксплуатацию:</Header.H2>
            23/09/2018
          </li>
          <li>
            <Header.H2>Дата проверки прибора:</Header.H2>
            23/09/2018
          </li>
          <li>
            <Header.H2>Дата следующей проверки прибора:</Header.H2>
            23/09/2018
          </li>
          <li>
            <Header.H2>Дата снятия прибора:</Header.H2>
            23/09/2018
          </li>
        </ul>

        <ul>
          <li>
            <Header.H2>Период действия акта-допуска:</Header.H2>
            до 23/09/2020
          </li>
          <li>
            <Header.H2>Диаметр:</Header.H2>
            670мм
          </li>
          <li>
            <Header.H2>Метрологический диапазон:</Header.H2>
            10-45
          </li>
          <li>
            <Header.H2>Аппаратная версия:</Header.H2>
            28798532
          </li>
          <li>
            <Header.H2>Программная версия:</Header.H2>
            28798532
          </li>
          <li>
            <Header.H2>Коэффициент трансформацйии:</Header.H2>
            28
          </li>
        </ul>
      </Info>
      <Chart />
    </div>
  )
}

export default MonitoringODPU

const Info = styled(Paper)`
  margin: 30px 0 40px;
  padding: 30px 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${Header.H1} {
    grid-column: 1 / -1;
    margin-bottom: 30px;
    color: #90a0b7;
  }

  ul li {
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    ${Header.H2} {
      color: #90a0b7;
      margin-right: 20px;
    }
  }
`
