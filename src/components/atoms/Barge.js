import styled, { css } from "styled-components"

export const Barge = styled.span`
  font-size: 14px;
  line-height: 20px;
  display: inline-block;
  padding: 0 8px;
  border-radius: 50px;
  background: #eef2f9;
  color: ${({ theme }) => theme.font.color[5]};

  ${({ type }) =>
    type === "rush" &&
    css`
      color: #f7685b;
      background-color: rgba(247, 104, 91, 0.11);
    `}

  ${({ type }) =>
    type === "regular" &&
    css`
      color: #5cb854;
      background-color: rgba(92, 184, 84, 0.11);
    `}
`
