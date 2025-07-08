import { useEffect, useState } from "react";
import * as S from "./styles";
import type { staffProps } from "../../models/staff";
import { api } from "../../lib/api";
import { StaffAccordion } from "../../components/accordion";
import { Input } from "../../components/input";

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
            <th style={{ textAlign: "left" }}>FOTO</th>
            <th style={{ textAlign: "left" }}>NOME</th>
            <th style={{ textAlign: "center" }}>O</th>
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
