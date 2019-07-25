import React from "react"
import styled from "styled-components"
import {
  Barge,
  Header,
  Button,
  Icon,
  Paper,
  Divider,
  Text,
  Step
} from "../atoms"

import map from "../../lib/img/map.jpg"
import { tasks } from "../../data"

const ControlDetail = ({ match, history }) => {
  console.log(match.params.id)

  const task = tasks.filter(item => +match.params.id === +item.id)

  return (
    <ControlDetailWrap>
      <div className="top-row">
        <Button.Back onClick={() => history.goBack()}>
          <Icon icon="arrow-left" size={10} />
        </Button.Back>
        <Barge type="rush">14</Barge>
        <Header.H1 color={4}>{task[0].title}</Header.H1>
      </div>
      <div className="content">
        <Paper className="left">
          <Header.H2 color={6}>ОДПУ</Header.H2>
          <Divider />
          <ul className="left__list">
            <li>
              <Text>Тип прибора:</Text>
              {"Вычислитель"}
            </li>
            <li>
              <Text>Номер узла комм.учета:</Text>
              {"2837172277"}
            </li>
            <li>
              <Text>Серийный номер прибора:</Text>
              {"2837172277"}
            </li>
            <li>
              <Text>Дата эксплуатации:</Text>
              {"23.10.2015"}
            </li>
            <li>
              <Text>Дата проверки:</Text>
              {"01.10.2017"}
            </li>
          </ul>
          <Divider />
          <Header.H2 color={6}>МКД</Header.H2>
          <Divider />
          <ul className="left__list">
            <li>
              <Text>Адрес:</Text>
              {"Республика Татарстан, г. Нижнекамск, просп. Химиков, д. 53/1"}
            </li>
          </ul>
          <div className="map">
            <img
              src={map}
              alt="map"
              style={{ height: "100%", width: "100%", marginBottom: -5 }}
            />
          </div>
        </Paper>
        <div className="rigth">
          <div className="right__top-panel">
            Комиссия за услуги по неисправному прибору : 2345р
          </div>
          <ul className="steps">
            <li>
              <div>
                <Header.H1>Созыв комиссии по ОДПУ</Header.H1>
                <div className="comment">
                  <span>+</span> добавить коментарии
                </div>
              </div>

              <div>
                <span className="data">20.05.2019</span>
                <span className="data">14:20</span>
                <Text>Выполнено</Text>
              </div>
              <Step.Round done />
            </li>
            <li>
              <div>
                <Header.H1>
                  Формирование акта о проведении комиссионой проверки
                </Header.H1>
                <div className="comment">
                  <span>+</span> добавить коментарии
                </div>
                <div className="akt">
                  <Icon icon="file"></Icon>
                  Акт проверки.pdf
                </div>
              </div>

              <div>
                <span className="data">20.05.2019</span>
                <span className="data">14:20</span>
                <Text>Выполнено</Text>
              </div>
              <Step.Round done />
            </li>
            <li>
              <div>
                <div className="select">Восстановление прибора</div>
                <div className="comment">
                  <Icon icon="pen" /> Акт был успешно сформирован и добавлен к
                  задаче
                </div>
                <div className="akt">
                  <Icon icon="file"></Icon>
                  Акт проверки.pdf
                </div>
              </div>

              <div>
                <span className="data">20.05.2019</span>
                <span className="data">14:20</span>
                <Text>Выполнено</Text>
              </div>
              <Step.Round done />
            </li>
            <li>
              <div>
                <Header.H1>
                  Созыв комиссии по постановке прибора на комм.учет
                </Header.H1>
                <div className="comment">
                  <Icon icon="pen" /> Акт был успешно сформирован и добавлен к
                  задаче
                </div>
                <div className="akt">
                  <Icon icon="file"></Icon>
                  Акт допуска в эксплуатацию.pdf
                </div>
              </div>

              <div>
                <span className="data">20.05.2019</span>
                <span className="data">14:20</span>
                <Text>Выполнено</Text>
              </div>
              <Step.Round>4</Step.Round>
            </li>
          </ul>
        </div>
      </div>
    </ControlDetailWrap>
  )
}

export default ControlDetail

const ControlDetailWrap = styled.section`
  .top-row {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    > *:not(:last-child) {
      margin-right: 15px;
    }
  }

  .content {
    display: grid;
    grid-template-columns: 3fr 9fr;
    grid-gap: 30px;
  }

  .left {
    align-self: start;

    ${Header.H2} {
      padding: 10px 20px;
    }
  }

  .left__list {
    padding: 20px;

    li {
      margin-bottom: 15px;
    }

    li:nth-child(2),
    li:nth-child(3) {
      color: ${({ theme }) => theme.colors.primary};
    }
    ${Text} {
      color: ${({ theme }) => theme.font.color[5]};
      margin-bottom: 6px;
    }
  }

  .map {
    min-height: 150px;
    background-color: #ccc;
    border-radius: 0 0 10px 10px;
    overflow: hidden;
  }

  .right__top-panel {
    background: #7499f8;
    box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
    padding: 20px;
    color: #fff;
    margin-bottom: 50px;
  }

  .steps {
    li {
      display: flex;
      margin-bottom: 50px;
      background: #ffffff;
      box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.08);
      border-radius: 10px;
      padding: 25px 25px 25px 75px;
      position: relative;
      > :first-child {
        flex-grow: 1;
      }

      > :last-child {
        display: inherit;
        align-items: flex-end;
        flex-flow: column;
        ${Text} {
          color: #7499f8;
          margin-top: auto;
        }
      }

      ${Header.H1} {
        color: #323c47;
        margin-bottom: 15px;
      }

      ${Step} {
        position: absolute;
        top: -20px;
        left: 20px;
      }
    }
    /* 
    li::before {
      content: "";
    } */
  }

  .comment {
    display: flex;
    align-items: center;
    color: #90a0b7;
    font-size: 14px;
    span {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.06);
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #fff;
      color: #7499f8;
      margin-right: 10px;
    }
  }

  .akt {
    margin-top: 10px;
    color: #7499f8;
    font-size: 14px;
    display: flex;
    align-items: center;
    > :first-child {
      margin-right: 10px;
    }
  }
  span.data {
    font-size: 12px;
    color: #90a0b7;
    display: block;
  }
`
