/**
 * save key and value in local storage
 * @param {string} key 
 * @param {*} value 
 */
export function save(key, value){
  localStorage.setItem(key, JSON.stringify(value));
}

/**
 * returns the value from local storage
 * @param {string} key 
 * @returns 
 */
export function load(key){
  try {
    const value = localStorage.getItem(key);
    return JSON.stringify(value);
  } catch {
    return null;
  }
}

/**
 * removes key and value from local storage
 * @param {string} key 
 * @returns 
 */
export function remove(key){
  try {
    localStorage.removeItem(key);
  } catch {
    return null;
  }
}