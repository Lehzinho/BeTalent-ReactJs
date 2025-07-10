import type { ReactNode } from "react";
import * as S from "./styles";

export const Container = ({ children }: { children: ReactNode }) => {
  return <S.Container>{children}</S.Container>;
};
