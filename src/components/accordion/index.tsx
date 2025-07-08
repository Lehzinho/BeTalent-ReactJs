import { useState } from "react";
//Icons
import { IoChevronDown } from "react-icons/io5";
// Types
import type { staffProps } from "../../models/staff";
// Styles
import * as S from "./styles";

export const StaffAccordion = (staff: staffProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // functions

  /**
   * this funciton formats the phone number
   */
  function handleFormatNumber(phone: string) {
    const cleaned = phone.replace(/\D/g, ""); // Remove non-digits

    const country = cleaned.slice(0, 2);
    const area = cleaned.slice(2, 4);
    const first = cleaned.slice(4, 9);
    const last = cleaned.slice(9, 13);

    return `+${country} (${area}) ${first}-${last}`;
  }

  return (
    <>
      <S.Container $active={isOpen} onClick={() => setIsOpen((prev) => !prev)}>
        <td style={{ textAlign: "center" }}>
          <img src={staff.image} alt="Emploee image" />
        </td>
        <td style={{ textAlign: "left" }}>{staff.name}</td>
        <td style={{ textAlign: "right" }}>
          <IoChevronDown />
        </td>
      </S.Container>
      {isOpen && (
        <S.Accordion $active={isOpen}>
          <td colSpan={3}>
            <div>
              <h2>Cargo</h2>
              <h3>{staff.job}</h3>
            </div>
            <div>
              <h2>data de admissão</h2>
              <h3>
                {new Date(staff.admission_date).toLocaleDateString("pt-br")}
              </h3>
            </div>
            <div>
              <h2>Telefone</h2>
              <h3>{handleFormatNumber(staff.phone)}</h3>
            </div>
          </td>
        </S.Accordion>
      )}
    </>
  );
};
