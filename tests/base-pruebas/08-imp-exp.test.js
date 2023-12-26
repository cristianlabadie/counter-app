import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe("Pruebas en 08-imp-exp", () => {
  test("getHeroById debe de retornar un héroe por ID", () => {
    const id = 1;
    const heroe = getHeroeById(id);
    const heroeData = heroes.find((h) => h.id === id);
    expect(heroe).toEqual(heroeData);
  });

  test("getHeroById debe de retornar undefined si héroe no existe", () => {
    const id = 10;
    const heroe = getHeroeById(id);
    expect(heroe).toBe(undefined);
    expect(heroe).toBeFalsy();
  });

  // Tarea
  test("getHeroByOwner debe de retornar un arreglo con los héroes de DC y solo de largo 3", () => {
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);
    const heroesData = heroes.filter((h) => h.owner === owner);
    expect(heroes).toEqual(heroesData);
    expect(heroes.length).toBe(3);
  });

  test("getHeroByOwner debe de retornar un arreglo con los héroes de Marvel con un largo de 4", () => {
    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(4);
  });
});
