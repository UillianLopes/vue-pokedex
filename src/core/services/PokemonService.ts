import axios from 'axios';
import {
  IGetPokemonResponse,
  IGetPokemonsResponse,
  ListResponseModel,
} from '../models';

class PokemonService {
  private readonly _client = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
  });

  getPokemons(params: {
    limit: number;
    offset: number;
  }): Promise<ListResponseModel<IGetPokemonsResponse>> {
    return this._client
      .get<ListResponseModel<IGetPokemonsResponse>>('/pokemon', { params })
      .then((response) => response.data);
  }

  getPokemon(name: string): Promise<IGetPokemonResponse> {
    return this._client
      .get(`/pokemon/${name}`)
      .then((response) => response.data);
  }
}

export const pokemonService = new PokemonService();
