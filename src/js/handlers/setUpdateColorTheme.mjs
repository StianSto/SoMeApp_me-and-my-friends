import { colorContrast } from "../functions/colorContrast.mjs";
import convertHexToRGB from "../functions/convertToRGB.mjs";
import { lightenColor } from "../functions/lightenColor.mjs";
import { setColorTheme } from "../functions/setColorTheme.mjs";
import * as storage from "../storage/index.mjs";

export function setUpdateColorTheme() {
  const updateUserTheme = document.getElementById("updateUserTheme");
  const colorPicker = document.getElementById("setUserTheme");

  try {
    let userTheme = storage.load("user-theme")["--user-theme-primary-hex"];
    if (userTheme) colorPicker.value = userTheme;
  } catch {
    colorPicker.value = "#000000";
  }

  updateUserTheme.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(updateUserTheme);
    let data = Object.fromEntries(formData.entries());

    let hexValue = data["--user-theme-primary"];
    let rgbValue = convertHexToRGB(hexValue);
    data["--user-theme-primary"] = rgbValue;

    let textColor = colorContrast(hexValue);
    let lighterColor = lightenColor(hexValue);
    data = {
      ...data,
      "--user-theme-primary-txtClr": textColor,
      "--user-theme-primary-100": lighterColor,
      "--user-theme-primary-hex": hexValue,
    };

    storage.save("user-theme", data);
    setColorTheme(data);
  });
}
