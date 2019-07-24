import styled from "styled-components";
import { Paper } from ".";
import { Header } from "./Typography";

export const InfoBlock = styled(Paper)`
  padding: 20px;
  ${Header.H1} {
    margin-bottom: 38px;
    color: ${({ theme }) => theme.font.color[4]};
  }

  ${Header.H2} {
    margin-bottom: 10px;
    color: ${({ theme }) => theme.font.color[5]};
  }

  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  ul li {
    color: ${({ theme }) => theme.font.color[1]};
  }

  ul {
    display: grid;
    grid-row-gap: 40px;
  }

  .two_col {
    grid-template-columns: 1fr 1fr;
    > :last-child {
      grid-column: 1 / -1;
    }
  }

  .three_col {
    grid-template-columns: 1fr 2fr 2fr;
    grid-gap: 25px;
    > .cool {
      color: ${({ theme }) => theme.colors.primary};
    }

    > .hot {
      color: ${({ theme }) => theme.colors.alert};
    }

    > .electro {
      color: #ffb946;
    }
  }
`;
