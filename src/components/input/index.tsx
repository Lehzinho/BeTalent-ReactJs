import React from "react";

// Icons
import { IoSearch } from "react-icons/io5";

//Styles
import * as S from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: InputProps) => {
  return (
    <S.Main>
      <input type="text" {...props} />
      <IoSearch size={24} />
    </S.Main>
  );
};
