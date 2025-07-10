import styled from "styled-components";

export const Main = styled.div`
  header {
    position: relative;
    z-index: 10;

    display: flex;
    align-items: center;

    width: 100%;
    height: 60px;

    background-color: ${({ theme }) => theme.COLORS["White/Neutral"]};
    box-shadow: 0 2px 8px 0px rgba(0, 0, 0, 0.2);

    img {
      margin-left: 21px;
    }
  }
`;
