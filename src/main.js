import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import './style.css';
import { createProductElement } from './helpers/shopFunctions';

const sectionProducts = document.querySelector('.products');

// Criador de elemento dinamico
const createElement = (tag, texto) => {
  const e = document.createElement('p');
  e.classList.add(tag);
  e.innerHTML = texto;
  sectionProducts.appendChild(e);
  return e;
};

// Apenas remove um elemento passado como parametro
const removeElement = (e) => {
  e.remove();
};

const getElementsApi = async () => {
  // Guardo minha function em uma constante pra conseguir remover depois
  const createE = createElement('loading', 'carregando...');

  // Pego os dados da API já tratados e faço um forEach usando a function já pronta "createProductElement" que cria automaticamente os elementos quando passado o parameratro array que é o results do objeto da API e adiciono esses elementos no meu HTML colocando ele como filho do "sectionProducts".
  try {
    const arrays = await fetchProductsList('Monitor');
    arrays.forEach((array) => {
      const setHtml = createProductElement(array);
      sectionProducts.appendChild(setHtml);
    });
  } catch {
    createElement('error', 'Algum erro ocorreu, recarregue a página e tente novamente');
  } finally {
    removeElement(createE);
  }
};

document.querySelector('.cep-button').addEventListener('click', searchCep);

window.onload = () => {
  getElementsApi();
};
