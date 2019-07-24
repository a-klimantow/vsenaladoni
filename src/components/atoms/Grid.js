import styled from "styled-components"

export const Grid = styled.div`
  display: grid;
`

const task = styled(Grid)`
  grid-template-columns: repeat(3, 1fr);
`
Grid.Task = task
