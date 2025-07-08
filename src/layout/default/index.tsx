import { Outlet } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import * as S from "./styles";

export const Layout = () => {
  return (
    <S.Container>
      <header>
        <img src={Logo} />
      </header>
      <Outlet />
    </S.Container>
  );
};
