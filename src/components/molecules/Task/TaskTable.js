import React from "react"
import styled from "styled-components"
import { Text, Header, Step, Icon } from "../../atoms"

const TaskTable = ({ history }) => {
  console.log(history)
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <th></th>
          <th>Тип задачи</th>
          <th>Этап</th>
          <th>Адрес</th>
          <th>Дата</th>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row onClick={() => history.replace("/control/l")}>
          <td>
            <Text color={5}>216</Text>
          </td>
          <td>
            <Header.H2 color={1}>Некоректные данные</Header.H2>
          </td>
          <td>
            <div className="item">
              <Step>4</Step>
              <Header.H2>Замена прибора</Header.H2>
            </div>
          </td>
          <td>
            <div className="item">
              <Icon icon="place" />
              <Text>Ул. Юности 25/2</Text>
            </div>
          </td>
          <td>
            <Text color={5}>20.05.2019</Text>
          </td>
        </Table.Row>
        <Table.Row onClick={() => history.replace("/control/l")}>
          <td>
            <Text color={5}>216</Text>
          </td>
          <td>
            <Header.H2 color={1}>Некоректные данные</Header.H2>
          </td>
          <td>
            <div className="item">
              <Step>4</Step>
              <Header.H2>Замена прибора</Header.H2>
            </div>
          </td>
          <td>
            <div className="item">
              <Icon icon="place" />
              <Text>Ул. Юности 25/2</Text>
            </div>
          </td>
          <td>
            <Text color={5}>20.05.2019</Text>
          </td>
        </Table.Row>
        <Table.Row onClick={() => history.replace("/control/l")}>
          <td>
            <Text color={5}>216</Text>
          </td>
          <td>
            <Header.H2 color={1}>Некоректные данные</Header.H2>
          </td>
          <td>
            <div className="item">
              <Step>4</Step>
              <Header.H2>Замена прибора</Header.H2>
            </div>
          </td>
          <td>
            <div className="item">
              <Icon icon="place" />
              <Text>Ул. Юности 25/2</Text>
            </div>
          </td>
          <td>
            <Text color={5}>20.05.2019</Text>
          </td>
        </Table.Row>
        <Table.Row onClick={() => history.replace("/control/l")}>
          <td>
            <Text color={5}>216</Text>
          </td>
          <td>
            <Header.H2 color={1}>Некоректные данные</Header.H2>
          </td>
          <td>
            <div className="item">
              <Step>4</Step>
              <Header.H2>Замена прибора</Header.H2>
            </div>
          </td>
          <td>
            <div className="item">
              <Icon icon="place" />
              <Text>Ул. Юности 25/2</Text>
            </div>
          </td>
          <td>
            <Text color={5}>20.05.2019</Text>
          </td>
        </Table.Row>
        <Table.Row onClick={() => history.replace("/control/l")}>
          <td>
            <Text color={5}>216</Text>
          </td>
          <td>
            <Header.H2 color={1}>Некоректные данные</Header.H2>
          </td>
          <td>
            <div className="item">
              <Step>4</Step>
              <Header.H2>Замена прибора</Header.H2>
            </div>
          </td>
          <td>
            <div className="item">
              <Icon icon="place" />
              <Text>Ул. Юности 25/2</Text>
            </div>
          </td>
          <td>
            <Text color={5}>20.05.2019</Text>
          </td>
        </Table.Row>
        <Table.Row onClick={() => history.replace("/control/l")}>
          <td>
            <Text color={5}>216</Text>
          </td>
          <td>
            <Header.H2 color={1}>Некоректные данные</Header.H2>
          </td>
          <td>
            <div className="item">
              <Step>4</Step>
              <Header.H2>Замена прибора</Header.H2>
            </div>
          </td>
          <td>
            <div className="item">
              <Icon icon="place" />
              <Text>Ул. Юности 25/2</Text>
            </div>
          </td>
          <td>
            <Text color={5}>20.05.2019</Text>
          </td>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}

export default TaskTable

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 15px;
  table-layout: fixed;
`

Table.Header = styled.thead`
  & th:first-of-type {
    padding-left: 30px;
    width: 60px;
  }

  & th:last-of-type {
    width: 120px;
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
    padding-left: 30px;
  }
`

Table.Row = styled.tr``
