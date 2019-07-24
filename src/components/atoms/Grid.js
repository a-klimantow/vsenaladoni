import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${p => p.column};
  grid-gap: 30px;
`;

const task = styled(Grid)`
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
`;
Grid.Task = task;
