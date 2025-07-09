import { useEffect, useState } from "react";

// Models
import type { staffProps } from "../../models/staff";

// Components
import { StaffAccordion } from "./components/accordion";
import { Input } from "../../components/input";

// lib
import { api } from "../../lib/api";

// styles
import * as S from "./styles";

export const Home = () => {
  const [staffArray, setStaffArray] = useState<staffProps[]>([]);
  const [filteredStaffArray, setFilteredStaffArray] = useState<staffProps[]>(
    []
  );

  function handleStaffSearch(e: string) {
    const tempStaffArray = staffArray.filter((staff) =>
      staff.name.toLocaleLowerCase().includes(e.toLocaleLowerCase())
    );
    setFilteredStaffArray(tempStaffArray);
  }

  useEffect(() => {
    async function handleFetchStaff() {
      const { data } = await api.get("/employees");
      setStaffArray(data);
      setFilteredStaffArray(data);
    }
    handleFetchStaff();
  }, []);

  return (
    <S.Container>
      <h1>Funcionários</h1>
      <Input
        placeholder="Pesquisar"
        onChange={(e) => handleStaffSearch(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>
              <h2>FOTO</h2>
            </th>
            <th>
              <h2>NOME</h2>
            </th>
            <th>
              <S.DinamicTh>
                <h2>CARGO</h2>
                <div />
              </S.DinamicTh>
            </th>
            <S.ResponsiveTh>DATA DE ADMISSÃO</S.ResponsiveTh>
            <S.ResponsiveTh>TELEFONE</S.ResponsiveTh>
          </tr>
        </thead>
        <tbody>
          {filteredStaffArray.map((staff) => (
            <StaffAccordion key={staff.id} {...staff} />
          ))}
        </tbody>
      </table>
    </S.Container>
  );
};
