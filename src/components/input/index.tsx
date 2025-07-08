import { IoSearch } from "react-icons/io5";
import * as S from "./styles";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: InputProps) => {
  return (
    <S.Container>
      <input type="text" {...props} />
      <IoSearch size={24} />
    </S.Container>
  );
};
