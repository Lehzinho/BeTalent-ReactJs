import { useState } from "react";
//Icons
import { IoChevronDown } from "react-icons/io5";
// Types
import type { staffProps } from "../../../../models/staff";
// Styles
import * as S from "./styles";

export const StaffAccordion = ({
  admission_date,
  image,
  job,
  name,
  phone,
}: staffProps) => {
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
      <S.Container $active={isOpen}>
        <td style={{ textAlign: "center" }}>
          <img src={image} alt="Emploee image" />
        </td>
        <td style={{ textAlign: "left" }}>
          <p>{name}</p>
        </td>
        <td style={{ textAlign: "right" }}>
          <button onClick={() => setIsOpen((prev) => !prev)}>
            <IoChevronDown size={24} />
          </button>
          <p className="cargoText">{job}</p>
        </td>
        <td className="mediaCell">
          <p> {new Date(admission_date).toLocaleDateString("pt-br")}</p>
        </td>
        <td className="mediaCell">
          <p>{handleFormatNumber(phone)}</p>
        </td>
      </S.Container>
      {isOpen && (
        <S.Accordion $active={isOpen}>
          <td colSpan={5}>
            <ul>
              <li>
                <p>Cargo</p>
                <p>{job}</p>
              </li>
              <li>
                {" "}
                <p>data de admissão</p>
                <p>{new Date(admission_date).toLocaleDateString("pt-br")}</p>
              </li>
              <li>
                <p>Telefone</p>
                <p>{handleFormatNumber(phone)}</p>
              </li>
            </ul>
          </td>
        </S.Accordion>
      )}
    </>
  );
};
