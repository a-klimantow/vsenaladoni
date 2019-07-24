import styled from "styled-components"

export const Step = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 28px;
  height: 27px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
`
