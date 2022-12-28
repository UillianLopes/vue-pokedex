export interface Ability {
  ability: Info;
  is_hidden: boolean;
  slot: number;
}

export interface GameIndice {
  game_index: number;
  version: Info;
}

export interface VersionDetail {
  rarity: number;
  version: Info;
}

export interface HeldItem {
  item: Info;
  version_details: VersionDetail[];
}

export interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: Info;
  version_group: Info;
}

export interface Move {
  move: Info;
  version_group_details: VersionGroupDetail[];
}

export interface DreamWorld {
  front_default: string;
  front_female?: string;
}

export interface Home {
  front_default: string;
  front_female?: string;
  front_shiny: string;
  front_shiny_female?: string;
}

export interface OfficialArtwork {
  front_default: string;
}

export interface Other {
  dream_world: DreamWorld;
  home: Home;
  'official-artwork': OfficialArtwork;
}

export interface RedBlue {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
}

export interface Yellow {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
}

export interface GenerationI {
  'red-blue': RedBlue;
  yellow: Yellow;
}

export interface Crystal {
  back_default: string;
  back_shiny: string;
  back_shiny_transparent: string;
  back_transparent: string;
  front_default: string;
  front_shiny: string;
  front_shiny_transparent: string;
  front_transparent: string;
}

export interface Gold {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent: string;
}

export interface Silver {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent: string;
}

export interface GenerationIi {
  crystal: Crystal;
  gold: Gold;
  silver: Silver;
}

export interface Emerald {
  front_default: string;
  front_shiny: string;
}

export interface FireredLeafgreen {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface RubySapphire {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface GenerationIii {
  emerald: Emerald;
  'firered-leafgreen': FireredLeafgreen;
  'ruby-sapphire': RubySapphire;
}

export interface DiamondPearl {
  back_default: string;
  back_female?: string;
  back_shiny: string;
  back_shiny_female?: string;
  front_default: string;
  front_female?: string;
  front_shiny: string;
  front_shiny_female?: string;
}

export interface HeartgoldSoulsilver {
  back_default: string;
  back_female?: string;
  back_shiny: string;
  back_shiny_female?: string;
  front_default: string;
  front_female?: string;
  front_shiny: string;
  front_shiny_female?: string;
}

export interface Platinum {
  back_default: string;
  back_female?: string;
  back_shiny: string;
  back_shiny_female?: string;
  front_default: string;
  front_female?: string;
  front_shiny: string;
  front_shiny_female?: string;
}

export interface GenerationIv {
  'diamond-pearl': DiamondPearl;
  'heartgold-soulsilver': HeartgoldSoulsilver;
  platinum: Platinum;
}

export interface Animated {
  back_default: string;
  back_female?: string;
  back_shiny: string;
  back_shiny_female?: string;
  front_default: string;
  front_female?: string;
  front_shiny: string;
  front_shiny_female?: string;
}

export interface BlackWhite {
  animated: Animated;
  back_default: string;
  back_female?: string;
  back_shiny: string;
  back_shiny_female?: string;
  front_default: string;
  front_female?: string;
  front_shiny: string;
  front_shiny_female?: string;
}

export interface GenerationV {
  'black-white': BlackWhite;
}

export interface OmegarubyAlphasapphire {
  front_default: string;
  front_female?: string;
  front_shiny: string;
  front_shiny_female?: string;
}

export interface XY {
  front_default: string;
  front_female?: string;
  front_shiny: string;
  front_shiny_female?: string;
}

export interface GenerationVi {
  'omegaruby-alphasapphire': OmegarubyAlphasapphire;
  'x-y': XY;
}

export interface Icons {
  front_default: string;
  front_female?: string;
}

export interface UltraSunUltraMoon {
  front_default: string;
  front_female?: string;
  front_shiny: string;
  front_shiny_female?: string;
}

export interface GenerationVii {
  icons: Icons;
  'ultra-sun-ultra-moon': UltraSunUltraMoon;
}

export interface Icons2 {
  front_default: string;
  front_female?: string;
}

export interface GenerationViii {
  icons: Icons2;
}

export interface Versions {
  'generation-i': GenerationI;
  'generation-ii': GenerationIi;
  'generation-iii': GenerationIii;
  'generation-iv': GenerationIv;
  'generation-v': GenerationV;
  'generation-vi': GenerationVi;
  'generation-vii': GenerationVii;
  'generation-viii': GenerationViii;
}

export interface Sprites {
  back_default: string;
  back_female?: string;
  back_shiny: string;
  back_shiny_female?: string;
  front_default: string;
  front_female?: string;
  front_shiny: string;
  front_shiny_female?: string;
  other: Other;
  versions: Versions;
}

export interface Info {
  name: string;
  url: string;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: Info;
}

export interface Type {
  slot: number;
  type: Info;
}

export interface IGetPokemonResponse {
  abilities: Ability[];
  base_experience: number;
  forms: Info[];
  game_indices: GameIndice[];
  height: number;
  held_items: HeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_types: string[];
  species: Info;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}
