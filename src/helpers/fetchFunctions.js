export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async (param) => {
  if (!param) {
    throw new Error('Termo de busca não informado');
  }
  const baseUrl = `https://api.mercadolibre.com/sites/MLB/search?q=${param}`;

  const response = await fetch(baseUrl);
  const data = response.json();
  return data.then((result) => result.results);
};
