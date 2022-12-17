import convertHexToRGB from "./convertToRGB.mjs";

export function lightenColor(hex) {
  let value = convertHexToRGB(hex, false);

  const { r, g, b } = value;
  const rgbValues = [r, g, b];

  let lighterColor;
  rgbValues.forEach((value) => {
    let brightnessScale = 0.1;
    lighterColor += Math.floor((255 - parseInt(value)) * brightnessScale);
  });
  console.log(lighterColor);
  return lighterColor;
}
