import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
  background-color: ${({ theme }) => theme.COLORS["Gray_00/Neutral"]};

        -webkit-font-smoothing: antialiased;
    }

    :focus{
        outline: 0;
    }

    body, input, textarea, button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    }
    li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style-type: none;
        border-bottom:dashed 1px ${({ theme }) =>
          theme.COLORS["Gray_10/Neutral"]} ;
        margin-bottom: 15px;
    }
`;
