import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => { 

  test('GetHeroById debe de retornar un heroe por ID', () => { 
    const id = 1;
    const hero = getHeroeById(id);
    expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
  })


  test('GetHeroById debe de retornar undefined si no existe ID', () => { 
    const id = 100;
    const hero = getHeroeById(id);

    expect( hero ).toBeFalsy();
  })

  test('GetHeroByOwner debe de retornar total de heroes por DC', () => { 
    const owner = 'DC';
    const hero = getHeroesByOwner(owner);
    expect( hero.length ).toEqual(3);
    expect( hero ).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));

  })

  test('GetHeroByOwner debe de retornar total de heroes por Marvel', () => { 
    const owner = 'Marvel';
    const hero = getHeroesByOwner(owner);
    expect( hero.length ).toEqual(2);
    expect( hero ).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));
  })

})