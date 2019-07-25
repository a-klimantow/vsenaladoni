import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Header, Grid, InfoBlock } from "../atoms";
import Task from "../molecules/Task";
import Chart from "../organisms/Chart";
import { tasks } from "../../data";

const Desktop = () => {
  return (
    <DesktopWrap>
      <Header.H1 color={4}>Новые задачи</Header.H1>
      <Grid.Task>
        {tasks.slice(0, 3).map(item => (
          <Link to={`/control/${item.id}`} key={item.id}>
            <Task title={item.title} />
          </Link>
        ))}
      </Grid.Task>
      <Header.H1 color={4}>Общая статистика по МКД</Header.H1>
      <Chart />
      <Grid column="3fr 4fr 5fr">
        <InfoBlock>
          <Header.H1 color={4}>Задачи</Header.H1>
          <ul>
            <li>
              <Header.H2>Обычные</Header.H2>
              {"12"}
            </li>
            <li>
              <Header.H2>Срочные</Header.H2>
              {"2"}
            </li>
            <li>
              <Header.H2>Всего задач</Header.H2>
              {"157"}
            </li>
          </ul>
        </InfoBlock>
        <InfoBlock>
          <Header.H1 color={4}>Сведения об УК</Header.H1>
          <ul className="two_col">
            <li>
              <Header.H2>Домов</Header.H2>
              {"12"}
            </li>
            <li>
              <Header.H2>Узлов учета</Header.H2>
              {"2"}
            </li>
            <li>
              <Header.H2>Общая площадь</Header.H2>
              {"157"}
            </li>
            <li>
              <Header.H2>Жилая площадь</Header.H2>
              {"157"}
            </li>
            <li>
              <Header.H2>Узлов регулирования</Header.H2>
              {"157"}
            </li>
          </ul>
        </InfoBlock>
        <InfoBlock>
          <Header.H1 color={4}>СОИ</Header.H1>
          <ul className="three_col">
            <li>
              <Header.H2>Ресурс:</Header.H2>
            </li>
            <li>
              <Header.H2>По городу:</Header.H2>
            </li>
            <li>
              <Header.H2>Всего:</Header.H2>
            </li>
            <li className="hot">ГВС</li>
            <li>{"75896.382"} р</li>
            <li>{"412896.382"} р</li>
            <li className="cool">ХВС</li>
            <li>{"75896.382"} р</li>
            <li>{"412896.382"} р</li>
            <li className="electro">Э/Э</li>
            <li>{"75896.382"} р</li>
            <li>{"412896.382"} р</li>
          </ul>
        </InfoBlock>
      </Grid>
    </DesktopWrap>
  );
};

export default Desktop;

const DesktopWrap = styled.section`
  ${Header.H1} {
    margin-bottom: 20px;
  }

  ${Grid.Task} {
    margin-bottom: 45px;
  }

  ${Grid} {
    margin-top: 45px;
  }
`;
