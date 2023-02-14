export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = (param) => {
  const baseUrl = `https://api.mercadolibre.com/sites/MLB/search?q=${param}`;

  return fetch(baseUrl).then((response) => response.json())
    .then((data) => (data.results));
};

fetchProductsList('computador');
