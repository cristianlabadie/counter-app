import { render, screen } from "@testing-library/react";
import { FirstApp } from "../../src/components/FirstApp";

describe("Pruebas en <FirstApp /> 2", () => {
  const title = "Hola, soy goku";
  const subtitle = "Soy un subtitulo";

  test("debe de hacer match con el snapshot", () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container.innerHTML).toMatchSnapshot();
  });

  test('debe de mostrar el mensaje "Hola, soy goku', () => {
    render(<FirstApp title={title} />);
    // screen.debug();
    expect(screen.getByText(title)).toBeTruthy();
  });

  test("debe de mostrar el titulo en un h1", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
      title,
    );
  });

  test("debe de mostrar el subtitulo enviado por props", () => {
    render(<FirstApp title={title} subtitle={subtitle} />);
    expect(screen.getByTestId("test-subtitle").innerHTML).toContain(subtitle);
  });
});
