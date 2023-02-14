import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import './style.css';
import { createProductElement } from './helpers/shopFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);
const sectionProducts = document.querySelector('.products');

const getChild = async () => {
  const arrays = await fetchProductsList('computador');
  arrays.forEach((array) => {
    const setHtml = createProductElement(array);
    sectionProducts.appendChild(setHtml);
  });
};

getChild();
