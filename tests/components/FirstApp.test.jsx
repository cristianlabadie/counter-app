import { render } from "@testing-library/react";
import { FirstApp } from "../../src/components/FirstApp";

describe("Pruebas en <FirstApp />", () => {
  test("debe de hacer match con el snapshot", () => {
    const title = "Estoy creando una app en react";
    const { container } = render(<FirstApp title={title} />);

    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar el titulo en un h1"', () => {
    const title = "Estoy creando una app en react";
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />,
    );

    expect(getByText(title)).toBeTruthy();

    // Esto es demasiado especifico y no es recomendable
    // const h1 = container.querySelector("h1");
    // expect(h1.innerHTML).toContain(title);

    // Esto es mejor
    expect(getByTestId("test-title").innerHTML).toContain(title); // con esto nos aseguramos que el contenido sea igual, independientemente de si es un h1, h2, etc.

    // con esto nos aseguramos que el contenido sea estrictamente en el contenido, si posee espacios, también los considerará
    // expect(getByTestId("test-title").innerHTML).toBe(title);
  });

  test("debe de mostrar el subtitulo enviado por props", () => {
    const title = "Estoy creando una app en react";
    const subtitle = "Esto es un subtitulo";
    const { getByText } = render(
      <FirstApp title={title} subtitle={subtitle} />,
    );

    expect(getByText(subtitle)).toBeTruthy();
  });
});
