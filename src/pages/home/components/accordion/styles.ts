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

  button {
    all: unset;
  }
  .mediaCell {
    display: none;
  }
  td {
    padding: 0 16px;
    .cargoText {
      display: none;
    }
  }

  svg {
    color: ${({ theme }) => theme.COLORS["Blue/Primary"]};
    transition: all 120ms ease-in-out;
    transform: rotate(${({ $active }) => ($active ? "180deg" : "0")});
  }

  @media (min-width: 780px) {
    .mediaCell {
      display: table-cell;
    }
    td {
      button {
        display: none;
      }
      .cargoText {
        display: block;
      }
    }
  }
`;

export const Accordion = styled.tr<AccordionProps>`
  display: table-row;
  box-shadow: ${({ $active }) =>
    $active ? "0 1px 2px rgba(0, 0, 0, 0.2)" : "none"};
  background-color: ${({ theme }) => theme.COLORS["White/Neutral"]};

  td {
    padding: 0 16px;

    li {
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;
      border-bottom: dashed 1px
        ${({ theme }) => theme.COLORS["Gray_10/Neutral"]};

      &:first-child {
        margin-top: 15px;
      }

      p:first-child {
        font: ${({ theme }) => theme.FONTS.H2};
      }

      p:last-child {
        font: ${({ theme }) => theme.FONTS.H3};
      }
    }
  }

  @media (min-width: 780px) {
    display: none;
  }
`;
