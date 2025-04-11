import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFecthGifs } from "../../src/hooks/useFecthGifs";

jest.mock('../../src/hooks/useFecthGifs'); // hace un mock compelto de ese path

describe('Prueba GifGrid', () => {

  const category = 'One Punch';

  test('Debe mostrar loading', () => {
    useFecthGifs.mockReturnValue({
      images: [],
      isLoading: true
    });

    render(<GifGrid category={ category }/>);
    expect( screen.getAllByText( 'Cargando...' ));
    expect( screen.getAllByText( category ) );
  });

  test('Debe mostrar items cuando se carge las imagenes del useFetch', () => {
    const gifs = [
      {
        id: '123',
        title: 'add',
        url: 'https://chatgpt.com'
      },
      {
        id: '4556',
        title: 'goku',
        url: 'https://chatgpt.com'
      }
    ]
    useFecthGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    });

    render(<GifGrid category={ category }/>);
    expect( screen.getAllByRole('img').length).toBe(2);
  })
  
});
