import pokémon from './data/pokémon.js';
import * as pokéUtils from './utilities/pokémon-utilities.js';

const multsOfFive = pokéUtils.getMultsOfFactor(pokémon, 5);
console.log(multsOfFive);

const waterTypes = pokéUtils.getPokéOfType(pokémon, 'water');
console.log(waterTypes);

const multiTypes = pokéUtils.getMultiType(pokémon);
console.log(multiTypes);

const onlyIds = pokéUtils.getOneField(pokémon, 'id');
console.log(onlyIds);

const namesGreaterThan57 = pokéUtils.getPokéGreaterThanMin(pokémon, 57);
console.log(namesGreaterThan57);

const onlyNormalTypes = pokéUtils.getOnlyTypes(pokémon, 'normal');
console.log(onlyNormalTypes);

const firstOfFlying = pokéUtils.getFirstBySecond(pokémon, 'flying');
console.log(firstOfFlying);

const psychicCount = pokéUtils.getCountByType(pokémon, 'psychic');
console.log(psychicCount);
