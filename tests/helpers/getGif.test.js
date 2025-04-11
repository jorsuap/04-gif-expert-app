import { string } from "prop-types";
import { getGifs } from "../../src/helpers/getGifs";


describe('Fetch', () => {
  test('Debe retornar un array de gifs', async() => {
    const gifs = await getGifs('one puhs');

    expect( gifs.length ).toBeGreaterThan(0);
    expect( gifs[0] ).toEqual( {
        id: expect.any( string ),
        title: expect.any( string),
        url: expect.any( string )
    })
  });
});
