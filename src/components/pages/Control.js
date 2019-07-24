import React from "react";
import styled from "styled-components";
import { Icon } from "../atoms";
import TaskCounter from "../molecules/TaskCounter";

const Control = () => {
  return (
    <ControlWrap>
      <div>любая дата</div>
      <div>
        <TaskCounter />
        <TaskCounter />
        <TaskCounter />
        <button>
          <Icon icon="place" />
        </button>
        <button>
          <Icon icon="desktop" />
        </button>
      </div>
    </ControlWrap>
  );
};

export default Control;

const ControlWrap = styled.section``;
