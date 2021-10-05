const checkboxRef = document.getElementById('theme-switch-toggle');
checkboxRef.addEventListener('change', onChangeTheme);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function onChangeTheme(e) {
  if (e.currentTarget.checked) {
    localStorage.setItem('theme', Theme.DARK);
    checked(Theme.DARK, Theme.LIGHT);
  } else {
    checked(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}
function checked(dark, ligth) {
  document.body.classList.add(dark);
  document.body.classList.remove(ligth);
}

onSaveTheme();
function onSaveTheme() {
  const saveTheme = localStorage.getItem('theme');
  if (saveTheme === Theme.DARK) {
    document.body.classList.add(Theme.DARK);
    checkboxRef.checked = true;
  }
}
