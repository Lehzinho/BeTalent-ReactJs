import { useEffect, useState } from "react";
import * as S from "./styles";
import type { staffProps } from "../../models/staff";
import { api } from "../../lib/api";
import { StaffAccordion } from "../../components/accordion";

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
      <div>
        <input
          type="text"
          onChange={(e) => handleStaffSearch(e.target.value)}
        />
      </div>
      <article>
        {filteredStaffArray.map((staff) => (
          <div key={staff.id}>
            <StaffAccordion />
            <pre>{JSON.stringify(staff, null, 2)}</pre>
          </div>
        ))}
      </article>
    </S.Container>
  );
};
