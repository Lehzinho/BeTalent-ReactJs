import styled from "styled-components";

export const Main = styled.div`
  header {
    img {
      margin-left: 21px;
    }
    background-color: ${({ theme }) => theme.COLORS["White/Neutral"]};
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    box-shadow: 0 2px 8px 0px rgba(0, 0, 0, 0.2);
    z-index: 10;
  }
`;
