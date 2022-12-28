export interface IconCollection {
  POKEMON_TYPES: IconSection;
}

export interface IconSection {
  [key: string]: string;
}

export const ICONS: IconCollection = {
  POKEMON_TYPES: {
    bug: require('../../assets/icons/pokemon-types/bug.svg') + '#bug',
    dark: require('../../assets/icons/pokemon-types/dark.svg') + '#dark',
    dragon: require('../../assets/icons/pokemon-types/dragon.svg') + '#dragon',
    electric:
      require('../../assets/icons/pokemon-types/electric.svg') + '#electric',
    fairy: require('../../assets/icons/pokemon-types/fairy.svg') + '#fairy',
    fighting:
      require('../../assets/icons/pokemon-types/fighting.svg') + '#fighting',
    fire: require('../../assets/icons/pokemon-types/fire.svg') + '#fire',
    flying: require('../../assets/icons/pokemon-types/flying.svg') + '#flying',
    ghost: require('../../assets/icons/pokemon-types/ghost.svg') + '#ghost',
    grass: require('../../assets/icons/pokemon-types/grass.svg') + '#grass',
    ground: require('../../assets/icons/pokemon-types/ground.svg') + '#ground',
    ice: require('../../assets/icons/pokemon-types/ice.svg') + '#ice',
    normal: require('../../assets/icons/pokemon-types/normal.svg') + '#normal',
    poison: require('../../assets/icons/pokemon-types/poison.svg') + '#poison',
    psychic:
      require('../../assets/icons/pokemon-types/psychic.svg') + '#psychic',
    rock: require('../../assets/icons/pokemon-types/rock.svg') + '#rock',
    steel: require('../../assets/icons/pokemon-types/steel.svg') + '#steel',
    water: require('../../assets/icons/pokemon-types/water.svg') + '#water',
  },
};
