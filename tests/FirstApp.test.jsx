import { getByTestId, render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('pruebag en <FirstApp/>', () => { 
  // test('debe de hacer match con el snapshot', () => { 
  //   const title = 'hola, soy goku';
  //   const {container}=render( <FirstApp title={title}/> );
  //   expect(container).toMatchSnapshot();

  // })

  test('debe de hacer match con el snapshot', () => { 
    const title = 'hola, soy goku';
    const {getByText,getByTestId}=render( <FirstApp title={title}/> );
    expect(getByText(title)).toBeTruthy();
    expect(getByTestId('test-title').innerHTML).toContain(title);
  })

  test('debe de mostrar el subtitulo enviado por props', () => { 
    const title = 'hola, soy goku';
    const subTitle = 'soy un subtitulo';
    const {getAllByText}=render( 
      <FirstApp 
        title={title}
        subTitle={subTitle}
      /> );
    expect(getAllByText(subTitle).length).toBe(2);
  })

  
 })