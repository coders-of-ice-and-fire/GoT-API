export async function getAllHouses(name, page = 1) {
  let url = `https://www.anapioficeandfire.com/api/houses/?page=${page}`;
  if (name) {
    url += `&name=${name}`;
  }
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
