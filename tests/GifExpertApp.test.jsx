import { fireEvent, render, screen  } from "@testing-library/react"
import { GiftExpertApp } from "../src/GiftExpertApp"

describe('Gif Expert App', () => {
  
    test('Debe hacer match con snapshot', () => {
      const { container } = render( <GiftExpertApp/> );
      expect(container).toMatchInlineSnapshot(`
<div>
  <h1>
    GiftExpertApp
  </h1>
  <form
    aria-label="form"
  >
    <input
      placeholder="Buscar gifs"
      type="text"
      value=""
    />
  </form>
  <h3>
    One Punch
  </h3>
  <h2>
    Cargando...
  </h2>
  <div
    class="card-grid"
  />
</div>
`);
    });

  
    test('Debe agregar una nueva categoría al enviar el formulario', () => {
        render( <GiftExpertApp /> );

        // Obtén el input y el formulario
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        // Simula la entrada en el input
        fireEvent.input( input, { target: { value: 'Goku' } } );

        // Simula el envío del formulario
        fireEvent.submit( form );

        // Asegúrate de que el nuevo valor "Goku" esté presente en el DOM
        expect( screen.getByText('Goku') ).toBeTruthy();
    });

    test('No debe agregar una categoria igual', () => {
        render( <GiftExpertApp /> );

        // Obtén el input y el formulario
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        // Simula la entrada en el input
        fireEvent.input( input, { target: { value: 'Goku' } } );
        // Simula el envío del formulario
        fireEvent.submit( form );
        fireEvent.input( input, { target: { value: 'Goku' } } );
        fireEvent.submit( form );

        // Asegúrate de que el nuevo valor "Goku" esté presente en el DOM
        const gokuElements = screen.getAllByText('Goku');
        expect( gokuElements.length ).toBe(1);
    });

})
