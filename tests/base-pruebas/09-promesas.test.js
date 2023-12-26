import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";
import heroes from "../../src/data/heroes";

describe("Pruebas en 09-promesas", () => {
  test("getHeroeByIdAsync debe de retornar un héroe", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toBe(heroes[0]);
      done();
    });
  });

  test("getHeroeByIdAsync debe de obtener un error si un héroe no existe", (done) => {
    const id = 100;
    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe("No se pudo encontrar el héroe");
      done();
    });
  });
});
