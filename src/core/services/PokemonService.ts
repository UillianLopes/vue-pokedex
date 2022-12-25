import axios from 'axios';
import { IGetPokemonsModel, ListResponseModel } from '../models';
import { GetPokemonModel } from '../models/GetPokemonModel';

class PokemonService {
  private readonly _client = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
  });

  getPokemons(params: {
    limit: number;
    offset: number;
  }): Promise<ListResponseModel<IGetPokemonsModel>> {
    return this._client
      .get<ListResponseModel<IGetPokemonsModel>>('/pokemon', { params })
      .then((response) => response.data);
  }

  getPokemon(name: string): Promise<GetPokemonModel> {
    return this._client
      .get(`/pokemon/${name}`)
      .then((response) => response.data);
  }
}

export const pokemonService = new PokemonService();
