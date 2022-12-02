/**
 * @param {string} tags string of tags. can be spaced apart by either commas(,) or spaces( )
 * @returns {Array} returns an array object of tags that can be sent to Noroff Social API
 * @example
 * ```js
 * const string = "tag1, tag2, tag3"
 * const tags = convertTagsStringToArray(string)
 * console.log(tags) // {"tag1", "tag2", "tag3"}
 * ```
 */
export function convertTagsStringToArray(tags) {
  const regex = /(?:,| )+/;
  const convertedTags = tags
    .split(regex) // split up all tags that are seperated with either spaces or commas
    .filter((tag) => tag.length > 0); // remove empty strings

  return convertedTags;
}
