import React from "react";
import styled from "styled-components";
import { Text, Barge } from "../atoms";

const TaskCounter = ({ title }) => {
  return (
    <TaskCounterWrap>
      <Text color={4}>Все задачи</Text>
      <Barge>56</Barge>
    </TaskCounterWrap>
  );
};

export default TaskCounter;

const TaskCounterWrap = styled.div`
  display: flex;
  align-content: center;
  ${Text} {
    margin-right: 10px;
  }
`;
