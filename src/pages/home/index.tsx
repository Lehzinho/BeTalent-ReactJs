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
import { Container } from "../../components/container";

export const Home = () => {
  const [staffArray, setStaffArray] = useState<staffProps[]>([]);
  const [filteredStaffArray, setFilteredStaffArray] = useState<staffProps[]>(
    []
  );

  // funcitons
  function handleStaffSearch(e: string) {
    const tempStaffArray = staffArray.filter((staff) =>
      staff.name.toLocaleLowerCase().includes(e.toLocaleLowerCase())
    );
    setFilteredStaffArray(tempStaffArray);
  }

  // useEffects
  useEffect(() => {
    async function handleFetchStaff() {
      const { data } = await api.get("/employees");
      setStaffArray(data);
      setFilteredStaffArray(data);
    }
    handleFetchStaff();
  }, []);

  return (
    <Container>
      <S.Main>
        <h1>Funcionários</h1>
        <Input
          placeholder="Pesquisar"
          onChange={(e) => handleStaffSearch(e.target.value)}
        />
        <table>
          <thead>
            <tr>
              <th>
                <p>FOTO</p>
              </th>
              <th>
                <p>NOME</p>
              </th>
              <th>
                <S.DinamicTh>
                  <p>CARGO</p>
                  <div />
                </S.DinamicTh>
              </th>
              <S.ResponsiveTh>
                <p>DATA DE ADMISSÃO</p>
              </S.ResponsiveTh>
              <S.ResponsiveTh>
                <p>TELEFONE</p>
              </S.ResponsiveTh>
            </tr>
          </thead>
          <tbody>
            {filteredStaffArray.map((staff) => (
              <StaffAccordion key={staff.id} {...staff} />
            ))}
          </tbody>
        </table>
      </S.Main>
    </Container>
  );
};
