import { IGetPokemonResponse } from './GetPokemonResponse';

export class PokemonModel {
  name: string;
  image: string;
  specie: string;
  types: string[];
  weight: number;
  stats: { name: string; value: number }[] = [];

  constructor({
    name,
    weight,
    sprites,
    species,
    types,
    stats,
  }: IGetPokemonResponse) {
    this.name = name;
    this.image = sprites.other['official-artwork'].front_default;
    this.specie = species.name;
    this.types = types.map(({ type }) => type.name);
    this.weight = weight;
    this.stats = stats.map(({ base_stat, stat }) => ({
      name: stat.name,
      value: base_stat,
    }));
  }
}

export class DetailedPokemonModel extends PokemonModel {
  constructor(response: IGetPokemonResponse) {
    super(response);
  }
}
