export interface IGetPokemonsModel {
  name: string;
  url: string;
}

export class GetPokemonsModel implements IGetPokemonsModel {
  name = '';
  url = '';

  constructor(model: IGetPokemonsModel) {
    this.name = model.name;
    this.url = model.url;
  }
}
