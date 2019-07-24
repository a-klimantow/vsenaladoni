import styled from "styled-components";

export const Barge = styled.span`
  font-size: 14px;
  line-height: 20px;
  display: inline-block;
  padding: 0 8px;
  border-radius: 50px;
  background: #eef2f9;
  color: ${({ theme }) => theme.font.color[5]};
`;
