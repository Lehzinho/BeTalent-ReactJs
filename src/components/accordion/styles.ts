import styled from "styled-components";
type AccordionProps = {
  $active: boolean;
};

export const Container = styled.tr<AccordionProps>`
  height: 60px;
  box-shadow: ${({ $active }) =>
    !$active ? "0 1px 2px rgba(0, 0, 0, 0.2)" : "none"};
  img {
    width: 34px;
    height: 34px;
    border-radius: 999px;
  }
  td {
    padding: 0 16px;
  }
`;

export const Accordion = styled.tr<AccordionProps>`
  display: table-row;
  box-shadow: ${({ $active }) =>
    $active ? "0 1px 2px rgba(0, 0, 0, 0.2)" : "none"};
  background-color: ${({ theme }) => theme.COLORS["White/Neutral"]};
  td {
    padding: 0 16px;
    div {
      border-bottom: dashed 1px
        ${({ theme }) => theme.COLORS["Gray_10/Neutral"]};
      margin-bottom: 15px;
      &:first-child {
        margin-top: 15px;
      }

      h2 {
        font: ${({ theme }) => theme.FONTS.H2};
      }

      h3 {
        font: ${({ theme }) => theme.FONTS.H3};
      }
      display: flex;
      justify-content: space-between;
    }
  }

  @media (min-width: 650px) {
    display: none;
  }
`;
