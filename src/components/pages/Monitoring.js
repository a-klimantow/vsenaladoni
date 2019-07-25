import React, { Component } from "react";
import styled from "styled-components";
import { odpu } from "../../data";

export default class extends Component {
  render() {
    const { history } = this.props;
    return (
      <MonitoringWrap>
        <div className="top-row">
          <div className="select">Район</div>
          <div className="select">Улица</div>
        </div>
        <Table>
          <Table.Header>
            <Table.Row>
              <th>Район</th>
              <th>Улица</th>
              <th>Номер дома</th>
              <th>Кол-во приборов</th>
              <th>Общая площадь </th>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {odpu.map(item => (
              <Table.Row
                key={item.id}
                onClick={() => history.replace("/monitoring/:id")}
              >
                {item.data.map(i => (
                  <td key={i}>{i}</td>
                ))}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </MonitoringWrap>
    );
  }
}

const MonitoringWrap = styled.section`
  .top-row {
    margin-bottom: 30px;
    > :first-child {
      margin-right: 20px;
    }
  }
`;
const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 15px;
  table-layout: fixed;
`;

Table.Header = styled.thead`
  & th:first-of-type {
    padding-left: 30px;
  }

  & th {
    color: ${({ theme }) => theme.font.color[5]};
    text-align: left;
    font-size: 14px;
    letter-spacing: 0.02em;
    font-family: "Ubuntu", sans-serif;
    font-weight: normal;
  }
`;

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
`;

Table.Row = styled.tr``;
