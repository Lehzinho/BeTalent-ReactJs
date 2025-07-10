import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { StaffAccordion } from ".";
import { DefaultTheme } from "../../../../styles/themes/default";
import type { staffProps } from "../../../../models/staff";

function renderComponent() {
  const staff: staffProps = {
    id: 2,
    name: "Roberto",
    job: "Front-end",
    admission_date: "2020-03-12T00:00:00.000Z" as unknown as Date,
    phone: "5550321654789",
    image:
      "https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png",
  };

  render(
    <ThemeProvider theme={DefaultTheme}>
      <table>
        <tbody>
          <StaffAccordion {...staff} />
        </tbody>
      </table>
    </ThemeProvider>
  );
}

// Mock do window.innerWidth para simular diferentes tamanhos de tela
const mockInnerWidth = (width: number) => {
  Object.defineProperty(window, "innerWidth", {
    writable: true,
    configurable: true,
    value: width,
  });
  window.dispatchEvent(new Event("resize"));
};

// Mock CSS media queries
const mockMediaQuery = (width: number) => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: width >= 780 && query.includes("min-width: 780px"),
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
};

describe("Accordion component", () => {
  describe("Media query under 780px", () => {
    beforeEach(() => {
      mockInnerWidth(760);
      mockMediaQuery(760);
    });

    it("Should have a button and accordion should be closed", () => {
      renderComponent();

      // Em mobile, o botão deve estar no documento
      expect(screen.getByRole("button")).toBeInTheDocument();

      // Inicialmente o accordion deve estar fechado
      expect(screen.queryByText("Cargo")).not.toBeInTheDocument();
    });

    it("Should toggle accordion content when button is clicked", () => {
      renderComponent();

      const button = screen.getByRole("button");

      // Inicialmente o accordion deve estar fechado
      expect(screen.queryByText("Cargo")).not.toBeInTheDocument();

      // Clica no botão para abrir
      fireEvent.click(button);

      // Verifica se o conteúdo do accordion apareceu
      expect(screen.getByText("Cargo")).toBeInTheDocument();
      expect(screen.getByText("data de admissão")).toBeInTheDocument();
      expect(screen.getByText("Telefone")).toBeInTheDocument();

      // Clica novamente para fechar
      fireEvent.click(button);

      // Verifica se o conteúdo foi removido
      expect(screen.queryByText("Cargo")).not.toBeInTheDocument();
    });
  });

  describe("Media query over 780px", () => {
    beforeEach(() => {
      mockInnerWidth(1024);
      mockMediaQuery(1024);
    });

    it("Should hide button and show desktop elements", () => {
      renderComponent();

      // Check if desktop elements are visible
      const admissionDateDesktop = screen.getByText("11/03/2020");
      const phoneDesktop = screen.getByText("+55 (50) 32165-4789");
      const cargoText = screen.getByText("Front-end");

      expect(admissionDateDesktop).toBeInTheDocument();
      expect(phoneDesktop).toBeInTheDocument();
      expect(cargoText).toBeInTheDocument();

      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
    });
  });
});
