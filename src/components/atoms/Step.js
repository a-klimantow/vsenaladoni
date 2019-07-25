import styled, { css } from "styled-components"

export const Step = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  min-width: 27px;
  height: 27px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
`

const round = styled(Step)`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  display: flex;
  ${p =>
    p.done &&
    css`
      background-color: #eef2f9;
    `}
`

Step.Round = round
