export async function getAllHouses(name) {
  let url = `https://www.anapioficeandfire.com/api/houses/`;
  if (name) {
    url += `?name=${name}`;
    console.log(url);
  }
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
