const checkboxRef = document.getElementById('theme-switch-toggle');
checkboxRef.addEventListener('change', onChangeTheme);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function onChangeTheme(e) {
  e.currentTarget.checked ? checked() : notChecked();
}
function checked() {
  document.body.classList.add(Theme.DARK);
  document.body.classList.remove(Theme.LIGHT);
  checkboxRef.checked = true;
  localStorage.setItem('theme', Theme.DARK);
}
function notChecked() {
  document.body.classList.add(Theme.LIGHT);
  document.body.classList.remove(Theme.DARK);
  localStorage.setItem('theme', Theme.LIGHT);
}
onSaveTheme();
function onSaveTheme() {
  const saveTheme = localStorage.getItem('theme');
  if (saveTheme === Theme.DARK) {
    checked();
  } else {
    notChecked();
  }
}
