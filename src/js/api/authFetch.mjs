import { load } from "../storage/index.mjs";

export function headers() {
  const token = load("accessToken");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

/**
 * template for an authorized fetch request.
 * @param {string} apiUrl endpoint url to api.
 * @param {Object} options submit options for fetch. headers defaulted to Content-Type: application/json and Authorization: bearer token.
 * @returns fetch request
 */
export async function authFetch(apiUrl, options) {
  return fetch(apiUrl, {
    ...options,
    headers: headers(),
  });
}
