import styled from "styled-components";

export const Main = styled.article`
  padding: 24px 20px;
  height: calc(100vh - 60px);

  h1 {
    margin-bottom: 24px;
    font: ${({ theme }) => theme.FONTS.H1};
  }
  table {
    border-collapse: collapse;
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS["White/Neutral"]};

    thead {
      tr {
        color: ${({ theme }) => theme.COLORS["White/Neutral"]};
        background-color: ${({ theme }) => theme.COLORS["Blue/Primary"]};
        height: 47px;

        th {
          padding: 0 15px;
          text-align: left;

          p {
            font: ${({ theme }) => theme.FONTS.H2};
          }

          &:first-child {
            width: 40px;
            border-radius: 8px 0 0 0;
          }

          &:nth-child(3) {
            border-radius: 0 8px 0 0;
          }
        }
      }
    }
  }

  @media (min-width: 780px) {
    padding: 44px 34px;

    table {
      thead {
        tr {
          th {
            &:nth-child(3) {
              border-radius: 0;
            }

            &:last-child {
              border-radius: 0 8px 0 0;
            }
          }
        }
      }
    }
  }
`;

export const DinamicTh = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 10px;
  h2 {
    display: none;
  }

  div {
    width: 8px;
    height: 8px;
    border-radius: 99px;
    background-color: ${({ theme }) => theme.COLORS["White/Neutral"]};
  }

  @media (min-width: 780px) {
    h2 {
      display: block;
    }

    div {
      display: none;
    }
  }
`;

export const ResponsiveTh = styled.th`
  display: none;

  @media (min-width: 780px) {
    display: table-cell;
  }
`;
