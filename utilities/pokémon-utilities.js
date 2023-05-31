/**
 * The pared-down Pokémon object.
 * @typedef {object} Pokémon
 * @property {id} number The ID of the pokémon.
 * @property {name} string The name of the pokémon.
 * @property {string[]} types The array containing the pokémon's types.
 */

/**
 * Returns an array of Pokémon objects whose id is a multiple of the given factor.
 * @param {Pokémon[]} pokémon The array of Pokémon.
 * @param {number} factor The number by which to factor each id.
 * @returns {Pokémon[]} The resulting array of Pokémon.
 */
const getMultsOfFactor = (pokémon, factor) => {
  return pokémon.filter((poké) => poké.id % factor === 0);
};

/**
 * Returns an array of Pokémon objects whose type array contains the given type.
 * @param {Pokémon[]} pokémon The array of Pokémon.
 * @param {string} type The type to search for.
 * @returns {Pokémon[]} The resulting array of Pokémon.
 */
const getPokéOfType = (pokémon, type) => {
  return pokémon.filter((poké) => poké.types.includes(type));
};

/**
 * Returns an array of Pokémon objects that have more than one type.
 * @param {Pokémon[]} pokémon The array of Pokémon.
 * @returns {Pokémon[]} The resulting array of Pokémon.
 */
const getMultiType = (pokémon) => {
  return pokémon.filter((poké) => poké.types.length > 1);
};

/**
 * Returns an array of a specific field from the Pokémon objects.
 * @param {Pokémon[]} pokémon - The array of Pokémon objects.
 * @param {string} field - The field name to extract from the Pokémon objects.
 * @returns {any[]} - An array containing the specified field's values.
 */
const getOneField = (pokémon, field) => {
  return pokémon.map((poké) => poké[field]);
};

/**
 * Filters Pokémon objects with IDs greater than a minimum value and returns an array of their names.
 * @param {Pokémon[]} pokémon - The array of Pokémon objects.
 * @param {number} min - The minimum value for the Pokémon IDs.
 * @returns {string[]} - An array of Pokémon names whose IDs are greater than the specified minimum value.
 */
const getPokéGreaterThanMin = (pokémon, min) => {
  // prettier-ignore
  return pokémon
    .filter((poké) => poké.id > min)
    .map((poké) => poké.name);
};

/**
 * Filters Pokémon objects by a specific type and returns an array of their names.
 * @param {Pokémon[]} pokémon - The array of Pokémon objects.
 * @param {string} type - The type to filter by.
 * @returns {string[]} - An array of Pokémon names that have the specified type.
 */
const getOnlyTypes = (pokémon, type) => {
  // prettier-ignore
  return pokémon
    .filter((poké) => poké.types.length === 1)
    .filter((poké) => poké.types[0] === type)
    .map((poké) => poké.name);
};

/**
 * Filters Pokémon objects by a specific second type and returns an array of their first types.
 * @param {Pokémon[]} pokémon - The array of Pokémon objects.
 * @param {string} secondType - The second type to filter by.
 * @returns {string[]} - An array of Pokémon first types that have the specified second type.
 */
const getFirstBySecond = (pokémon, secondType) => {
  // prettier-ignore
  return pokémon
    .filter((poké) => poké.types[1] === secondType)
    .map((poké) => poké.types[0]);
};

/**
 * Counts the number of Pokémon objects that have a specific type.
 * @param {Pokémon[]} pokémon - The array of Pokémon objects.
 * @param {string} type - The type to count.
 * @returns {number} - The count of Pokémon objects with the specified type.
 */
const getCountByType = (pokémon, type) => {
  // prettier-ignore
  return pokémon.filter((poké) =>
    poké.types.includes(type)
  ).length;
};

export {
  getMultsOfFactor,
  getPokéOfType,
  getMultiType,
  getOneField,
  getPokéGreaterThanMin,
  getOnlyTypes,
  getFirstBySecond,
  getCountByType,
};
