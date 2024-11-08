import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones',() =>{
  test('getUser debe de retornar un objeto', () => { 
    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    };
    const user = getUser();
    // console.log(user)
    expect( testUser ).toStrictEqual ( user )
  });

  test('getUsusarioActivo debe de retornar un objeto', () => { 
    const name = 'kissmark';
    const testGetUser = {
      uid: 'ABC567',
      username: name
  };

    const usuarioActivo =  getUsuarioActivo(name);

    expect(testGetUser).toEqual(usuarioActivo)

  })

})