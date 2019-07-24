import styled, { css } from "styled-components"

// общие слили для текста
const fontStyle = css`
  color: ${p => p.theme.font.color[`${p.color}`]};
  margin: 0;
`

// простой текст
export const Text = styled.p`
  ${fontStyle}
  font-family: ${({ theme }) => theme.font.family.text}, sans-serif;
  font-size: ${p => (p.small ? "12px" : p.large ? "16px" : "14px")};
`

const status = styled(Text)`
  &::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 6px;
    background-color: ${p =>
      p.work ? `${p.theme.colors.normal}` : `${p.theme.colors.alert}`};
  }
  color: ${p =>
    p.work ? `${p.theme.colors.normal}` : `${p.theme.colors.alert}`};
`

// стили для заголовков
export const Header = styled.h1`
  ${fontStyle};
  font-family: ${({ theme }) => theme.font.family.header}, sans-serif;
  font-weight: ${p => (p.medium ? 500 : 400)};
`

const h1 = styled(Header)`
  font-size: 16px;
`

const h2 = styled(Header)`
  font-size: 14px;
`

Header.H1 = h1
Header.H2 = h2
Text.Status = status
