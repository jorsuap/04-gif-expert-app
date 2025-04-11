
import { render } from "@testing-library/react";
import { GifCard } from "../../src/components/GifCard";
import { screen } from "@testing-library/react";


describe('GifCard', ()=> {
    const title = 'Goku';
    const url = 'https://chatgpt.com/';

    test('Snapshot', ()=> {
        const { container }  = render( <GifCard title={title} url={url}/>);
        expect( container ).toMatchSnapshot();
    });

    test('Debe mostrar la imagen con url y alt', ()=>{
        render( <GifCard title={title} url={url}/>);

        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    });

    test('Title', (()=>{
        render( <GifCard title={ title } url={ url }/>);

        expect( screen.getByText( title )).toBeTruthy();
    }))
})