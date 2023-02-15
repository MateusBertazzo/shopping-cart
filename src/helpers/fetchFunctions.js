export const fetchProduct = async (id) => {
  if (!id) {
    throw new Error('ID não informado');
  }
  const BaseUrl = `https://api.mercadolibre.com/items/${id}`;
  const response = await fetch(BaseUrl);
  const datas = response.json();
  return datas.then((data) => data);
};

// ==============================================================

export const fetchProductsList = async (param) => {
  if (!param) {
    throw new Error('Termo de busca não informado');
  }
  const baseUrl = `https://api.mercadolibre.com/sites/MLB/search?q=${param}`;
  const response = await fetch(baseUrl);
  const data = response.json();
  return data.then((result) => result.results);
};
