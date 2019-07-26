import React from "react"
import styled from "styled-components"
import { Paper } from "../atoms"
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area
} from "recharts"
import Select from "../organisms/Select/Select"

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
]

const sensors = [{ id: "odpu", title: "ОДПУ" }, { id: "ipu", title: "ИПУ" }]

const Chart = () => {
  return (
    <ChartWrap>
      <div className="tabs">
        <div>Холодная вода</div>
        <div>Горячая вода</div>
        <div>Электроэнергия</div>
      </div>
      <div className="top-line">
        <Select data={sensors}>ОДПУ</Select>
        <div className="select">Любая дата</div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </ChartWrap>
  )
}

export default Chart

const ChartWrap = styled(Paper)`
  min-height: 360px;

  .top-line {
    margin-left: 30px;
    > :first-child {
      margin-right: 20px;
    }
  }

  .tabs {
    display: flex;
    margin-bottom: 20px;
    > * {
      flex-grow: 1;
      text-align: center;
      padding: 14px 0;
      background-color: #eef2f9;
      color: #90a0b7;
      font-size: 16px;

      :first-child {
        background-color: #fff;
        border-bottom: 1px solid #eef2f9;
        color: #258ffb;
      }
    }
  }
`
