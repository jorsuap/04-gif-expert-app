import { fireEvent, render } from "@testing-library/react";
import { AddCAtegory } from "../../src/components/AddCAtegory";
import { screen } from "@testing-library/react";


describe('AddCategory', () => {

  test('Debe cambiar y recibir valor en el input', () => {
    render(<AddCAtegory onNewCategory={ ()=>{} }/>);
    const input = screen.getByRole('textbox');

    fireEvent.input( input, { target: { value: 'Goku' } } );

    expect( input.value ).toBe('Goku');
  });

  test('Debe llamar onNewCategory', () => {
    const inputValue = 'Goku';
    const onNewCategory = jest.fn();

    render(<AddCAtegory onNewCategory={ onNewCategory }/>);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');// se debe agregar un aria-label o testid

    fireEvent.input( input, { target: { value: inputValue } } );
    fireEvent.submit( form );

    expect( input.value ).toBe('');
    expect( onNewCategory ).toHaveBeenCalled();
    expect( onNewCategory ).toHaveBeenCalledWith(inputValue);
  });

  test('NO debe llamar onNewCategory si el input es vacio', () => {
    const onNewCategory = jest.fn();

    render(<AddCAtegory onNewCategory={ onNewCategory }/>);
    const form = screen.getByRole('form');

    fireEvent.submit( form );

    expect( onNewCategory ).not.toHaveBeenCalled();
  });
})
