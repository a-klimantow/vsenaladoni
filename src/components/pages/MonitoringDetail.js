import React, { Component } from "react"
import styled from "styled-components"
import { odpu } from "../../data"
import { Button, Icon, Paper, Header } from "../atoms"
import Select from "../organisms/Select/Select"

const sensors = [{ id: "odpu", title: "ОДПУ" }, { id: "ipu", title: "ИПУ" }]
const resurs = [{ id: "гвс", title: "ГВС" }, { id: "хвс", title: "ХВС" }]
const pribor = [{ id: "вычислитель", title: "Вычислитель" }]

export default class extends Component {
  render() {
    const { history } = this.props
    return (
      <MonitoringWrap>
        <Button.Back
          style={{ marginBottom: 20 }}
          onClick={() => history.push("/monitoring")}
        >
          <Icon icon="arrow-left" size={10} />
        </Button.Back>
        <CurrentInfo>
          <div>
            <Header.H1>Адрес</Header.H1>
            <ul>
              <li>
                <Header.H2>Район:</Header.H2>
                Кировский
              </li>
              <li>
                <Header.H2>Улица:</Header.H2>
                Просп.Химиков
              </li>
              <li>
                <Header.H2>Номер дома:</Header.H2>
                53/1
              </li>
              <li>
                <Header.H2>Строение:</Header.H2>4
              </li>
              <li>
                <Header.H2>Литер:</Header.H2>2
              </li>
              <li>
                <Header.H2>Индекс:</Header.H2>
                260555
              </li>
            </ul>
          </div>
          <div>
            <Header.H1>Тип дома</Header.H1>
            <ul>
              <li>
                <Header.H2>Кол-во подъездов:</Header.H2>
                12
              </li>
              <li>
                <Header.H2>Кол-во этажей:</Header.H2>
                12
              </li>
              <li>
                <Header.H2>Наличие лифта:</Header.H2>
                есть
              </li>
              <li>
                <Header.H2>Кол-во квартир:</Header.H2>
                789
              </li>
              <li>
                <Header.H2>Общая площадь жилых помещений:</Header.H2>
                1256м
              </li>
              <li>
                <Header.H2>Площадь нежилых помещений:</Header.H2>
                500м
              </li>
              <li>
                <Header.H2>Площадь придомовая:</Header.H2>
                254м
              </li>
            </ul>
          </div>
          <div>
            <Header.H1>Узлы учета</Header.H1>
            <ul className="point">
              <li>4566874473</li>
              <li>2517874473</li>
              <li>4566874473</li>
              <li>2517874473</li>
            </ul>
          </div>
        </CurrentInfo>
        <div className="top-row">
          <Select data={sensors}>ОДПУ</Select>
          <Select data={resurs}>Ресурс</Select>
          <Select data={pribor}>Тип прибора</Select>
        </div>
        <Table>
          <Table.Header>
            <Table.Row>
              <th>Серийный номер прибора</th>
              <th>Ресурс</th>
              <th>Номер квартиры</th>
              <th>Дата поверки</th>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {[1, 1, 1, 1, 1, 1, 1].map(i => (
              <Table.Row onClick={() => history.push("/odpu")}>
                <td>292929292929</td>
                <td>Вычислитель</td>
                <td>ГВС</td>
                <td>23.04.2019</td>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </MonitoringWrap>
    )
  }
}

const MonitoringWrap = styled.section`
  .top-row {
    margin-bottom: 30px;
    > * {
      margin-right: 20px;
    }
  }
`
const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 15px;
  table-layout: fixed;
`

Table.Header = styled.thead`
  & th:first-of-type {
    padding-left: 60px;
  }

  & th {
    color: ${({ theme }) => theme.font.color[5]};
    text-align: left;
    font-size: 14px;
    letter-spacing: 0.02em;
    font-family: "Ubuntu", sans-serif;
    font-weight: normal;
  }
`

Table.Body = styled.tbody`
  .item {
    display: flex;
    align-items: center;
    > :first-child {
      margin-right: 10px;
    }
  }

  td {
    background-color: #fff;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.03),
      3px -3px 3px rgba(0, 0, 0, 0.03);
    padding: 15px 0;
  }

  td:last-of-type {
    border-radius: 0 10px 10px 0;
  }

  td:first-of-type {
    border-radius: 10px 0 0 10px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.03),
      3px -3px 3px rgba(0, 0, 0, 0.02), -3px 0px 3px rgba(0, 0, 0, 0.03);
    padding-left: 60px;
  }
`

Table.Row = styled.tr``

const CurrentInfo = styled(Paper)`
  padding: 20px 50px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  margin-bottom: 30px;

  ${Header.H1} {
    color: #90a0b7;
    margin-bottom: 27px;
  }

  ul.point li {
    color: #7499f8;
  }
  ul li {
    display: flex;
    font-size: 14px;
    color: #323c47;
    margin-bottom: 15px;
  }
  ${Header.H2} {
    color: #90a0b7;
    margin-right: 10px;
  }
`
