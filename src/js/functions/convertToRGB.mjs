/**
 *
 * @param {string} hexValue a string containing the hex-value of the color that is to be converted.
 * @param {Boolean} [returnAsString] choose if function should return rgb as string or as an object. returns string by default if nothing else is passed in.
 * @returns
 */
export default function convertHexToRGB(hexValue, returnAsString = true) {
  let redRGB = parseInt(cutHex(hexValue).substring(0, 2), 16);
  let greenRGB = parseInt(cutHex(hexValue).substring(2, 4), 16);
  let blueRGB = parseInt(cutHex(hexValue).substring(4, 6), 16);

  function cutHex(hexValue) {
    return hexValue.charAt(0) == "#" ? hexValue.substring(1, 7) : hexValue;
  }

  console.log(redRGB, greenRGB, blueRGB);

  if (returnAsString === true) return `${redRGB}, ${greenRGB}, ${blueRGB}`;
  const rgbObject = {
    r: redRGB,
    g: greenRGB,
    b: blueRGB,
  };

  return rgbObject;
}
