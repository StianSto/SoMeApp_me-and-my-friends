export default function createFlagString(flagOptions) {
  let string = "";
  for (const [key, value] of Object.entries(flagOptions)) {
    if (string) string += "&";
    string += `${key}=${value}`;
  }
  return string;
}
