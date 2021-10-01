import cardTemplate from '../templates/menu-temp.hbs';
import items from '../js/menu.json';

console.log(cardTemplate(items));

const itemEl = document.querySelector('.js-menu');

const imagesMarkup = createImagesList(items);
itemEl.insertAdjacentHTML('beforeend', imagesMarkup);

function createImagesList(items) {
  return cardTemplate(items);
}
