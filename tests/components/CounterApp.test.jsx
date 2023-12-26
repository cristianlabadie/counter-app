import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../../src/components/CounterApp";

describe("Pruebas en <CounterApp />", () => {
  const value = 100;

  test("debe de hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={value} />);
    expect(container.innerHTML).toMatchSnapshot();
  });

  test("debe de mostrar el valor inicial de 100 <CounterApp value={100} />", () => {
    render(<CounterApp value={value} />);
    expect(parseInt(screen.getByTestId("test-counter").innerHTML)).toBe(value);
  });

  test("debe de incrementar con botón +", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("+"));
    expect(screen.getByText(value + 1)).toBeTruthy();
  });

  test("debe de decrementar con botón -", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("-"));
    expect(screen.getByText(value - 1)).toBeTruthy();
  });

  test("debe de resetear con botón reset después de haber incrementado en 1", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("+"));
    expect(screen.getByText(value + 1)).toBeTruthy();

    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));
    expect(screen.getByText(value).innerHTML).toBe("100");
  });
});
