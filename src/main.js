import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import './style.css';
import { createProductElement } from './helpers/shopFunctions';

const sectionProducts = document.querySelector('.products');

// Apenas remove um elemento passado como parametro
const removeElement = (e) => {
  e.remove();
};

const getElementsApi = async () => {
  // Crio elemento P para adicionar o carregando... enquanto minha Api não retorna, tentei criar uma function e passar como parametro pro removeElement mas deu ruim, depois vejo isso.
  const p = document.createElement('p');
  p.classList.add('loading');
  p.innerHTML = 'carregando...';
  sectionProducts.appendChild(p);

  const arrays = await fetchProductsList('computador');
  arrays.forEach((array) => {
    const setHtml = createProductElement(array);
    sectionProducts.appendChild(setHtml);
  });
  // Removo o elemento P depois que a API retorna meus dados
  removeElement(p);
};

document.querySelector('.cep-button').addEventListener('click', searchCep);

window.onload = () => {
  getElementsApi();
};
