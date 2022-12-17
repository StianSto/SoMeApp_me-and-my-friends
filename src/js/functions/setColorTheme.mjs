const root = document.querySelector(":root");
export function setColorTheme(themeObject, el = root) {
  for (const [key, value] of Object.entries(themeObject)) {
    console.log(`${key}`);
    console.log(`${value}`);

    el.style.setProperty(key, value);
  }
}
