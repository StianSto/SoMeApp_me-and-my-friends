/**
 * takes a string of tags, splits them up and puts them in an array which is returned. the function can split tags by both commas and spaces.
 * @param {string} tags string of tags. can be spaced apart by either commas(,) or spaces( )
 * @returns {Array} array of tags that can be sent to Noroff Social API
 * @example
 * const string = "tag1, tag2, tag3"
 * const tags = convertTagsStringToArray(string)
 * console.log(tags) // {"tag1", "tag2", "tag3"}
 */
export function convertTagsStringToArray(tags) {
  const regex = /(?:,| )+/;
  const convertedTags = tags
    .split(regex) // split up all tags that are seperated with either spaces or commas
    .filter((tag) => tag.length > 0); // remove empty strings

  return convertedTags;
}
