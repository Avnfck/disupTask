export const fetchData = async (url) => {
    const response = await fetch(encodeURI(url));
    const data = await response.json();
    return data.pokemon;
}