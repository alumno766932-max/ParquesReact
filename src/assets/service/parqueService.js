export const parqueService = async () => {
  const response = await fetch('https://pacopul.github.io/json/pn/parques.json');
  if (!response.ok) throw new Error('Error al obtener los pokemons');
  const data = await response.json();
  return data.parques;
};