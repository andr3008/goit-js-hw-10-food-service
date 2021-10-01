import cardTemplate from '../templates/menu-temp.hbs';
import items from '../js/menu.json';

// Добавил шаблон в DOM
const itemEl = document.querySelector('.js-menu');
const imagesMarkup = createImagesList(items);
itemEl.insertAdjacentHTML('beforeend', imagesMarkup);

function createImagesList(items) {
  return cardTemplate(items);
}

// Изменении темы
const checkboxRef = document.getElementById('theme-switch-toggle');
checkboxRef.addEventListener('change', onChangeTheme);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function onChangeTheme(e) {
  !e.currentTarget.checked ? addClass(Theme.LIGHT, Theme.DARK) : addClass(Theme.DARK, Theme.LIGHT);
}
const addClass = (light, dark) => {
  document.body.classList.add(light);
  document.body.classList.remove(dark);
};
