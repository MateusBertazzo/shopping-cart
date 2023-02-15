import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('Testa se "FetchProduct" é uma function', () => {
    expect(typeof fetchProduct).toBe('function')
  });

  it('Testa se o Fetch foi chamado', async () => {
    await fetchProduct('MLB1405519561')
    expect(fetch).toHaveBeenCalled()
  });

  it('Testa se o Fetch quando chamado utiliza o EndPoint correto', async () => {
    await fetchProduct('MLB1405519561')
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1405519561')
  });

  it('Testa se a Estrutura de dados é igual ao objeto produto', async () => {
    const returnedApi = await fetchProduct('MLB1405519561')
    expect(returnedApi).toEqual(product)
  });

  it('Testa se, ao não passar um parametro a function retorna o erro: "ID não informado"', async () => {

    await expect(fetchProduct()).rejects.toEqual(new Error('ID não informado'))
  });
});