/**
 * creates a string of flags that can be put at the end of a url to be sent to the API.
 * @param {Object} flagOptions pass in object of options
 * @returns a string that can be put at the end of a url
 * @example
 * const flagOptions = {
 *  sortBy: "title",
 *  sort: "asc",
 *  _author: true,
 * }
 *
 * createFlagString(flagOptions)
 * //returns "sortBy=title&sort=asc&_author=true"
 */

export default function createFlagString(flagOptions) {
  let string = "";
  for (const [key, value] of Object.entries(flagOptions)) {
    if (value.length === 0) continue;

    if (string) string += "&";
    string += `${key}=${value}`;
  }
  return string;
}
