export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=yjCy8Tp5UxOc3I5EE2a4rPKcc4ao5sUz&q=${ category }&limit=10`;
    const resp = await fetch( url );

    const { data } = await resp.json();

    return data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
}