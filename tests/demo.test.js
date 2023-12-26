describe("Demo test", () => {
  test("Esta prueba es de demostración", () => {
    const message1 = "Hola Mundo";

    const message2 = message1.trim();

    expect(message1).toBe(message2);
  });
});
