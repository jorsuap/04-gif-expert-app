import { renderHook, waitFor } from "@testing-library/react";
import { useFecthGifs } from "../../src/hooks/useFecthGifs"


describe('', () => {
  test('Debe regresar el estado inicial', () => {
    const { result } = renderHook(()=> useFecthGifs('goku'));
    const { images, isLoading } = result.current;

    expect( images.length ).toBe(0);
    expect( isLoading ).toBeTruthy();
  });

  test('Debe regresar un arreglo de imagenes y isLoading en false', async() => {
    const { result } = renderHook(()=> useFecthGifs('goku'));

    await waitFor(
        ()=> expect( result.current.images.length ).toBeGreaterThan(0), // espera hasta que esto suceda o se cumpla
        { timeout: 2000 } // Ajusta el timeout si es necesario para que alcance a responder y completar
    );
    
    const { images, isLoading } = result.current;

    expect( images.length ).toBeGreaterThan(0);
    expect( isLoading ).toBeFalsy();
  });
  
})
