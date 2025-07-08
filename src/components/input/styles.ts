import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 0 16px;
  margin-bottom: 20px;
  border: 1px solid ${({ theme }) => theme.COLORS["Gray_10/Neutral"]};
  background-color: ${({ theme }) => theme.COLORS["White/Neutral"]};

  svg {
    color: ${({ theme }) => theme.COLORS["Gray_10/Neutral"]};
  }
  input {
    height: 48px;
    width: 100%;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS["Gray_10/Neutral"]};
    }
  }
`;
