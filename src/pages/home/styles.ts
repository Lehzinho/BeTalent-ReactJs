import styled from "styled-components";

export const Container = styled.div`
  padding: 24px 20px;
  background-color: ${({ theme }) => theme.COLORS["Gray_05/Neutral"]};

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
          &:first-child {
            width: 40px;
            border-radius: 8px 0 0 0;
          }
          &:last-child {
            border-radius: 0 8px 0 0;
          }
        }
      }
    }
  }
`;
