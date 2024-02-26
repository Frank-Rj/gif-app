
export const getGifs = async(category) => {
    const apiKey = 'JcBVNjYdbbnCJfreXYJw1SkHgKmYTEvy';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`;
    const reqs = await fetch(url);
    const { data } = await reqs.json();

    const gifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
} 