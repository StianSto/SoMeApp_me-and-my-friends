import convertHexToRGB from "./convertToRGB.mjs";

export function colorContrast(value) {
  if (value.includes("#")) value = convertHexToRGB(value, false);

  const { r, g, b } = value;

  // formula for color brightness from https://www.w3.org/TR/AERT/#color-contrast
  // code inspired by David Halford https://codepen.io/davidhalford/pen/AbKBNr
  // ((Red value X 299) + (Green value X 587) + (Blue value X 114)) / 1000

  let brightnessRed = r * 299;
  let brightnessGreen = g * 587;
  let brightnessBlue = b * 114;
  let brightness = (brightnessRed + brightnessGreen + brightnessBlue) / 1000;
  console.log(r, g, b);
  return brightness > 120 ? "#000000" : "#FFFFFF";
}
