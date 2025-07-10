import { Outlet } from "react-router-dom";

// Assets
import Logo from "../../assets/logo.svg";

// Components
import { Container } from "../../components/container";

// Styles
import * as S from "./styles";

export const Layout = () => {
  return (
    <S.Main>
      <header>
        <Container>
          <img src={Logo} />
        </Container>
      </header>
      <Outlet />
    </S.Main>
  );
};
