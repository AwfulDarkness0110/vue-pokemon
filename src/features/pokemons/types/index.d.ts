
interface Pokemon_V2_Sprites {
  sprites: string
}

export interface Pokemon_V2_Pokemon {
  id: number
  name: string
  weight: number
  height: number
  is_default: boolean
  pokemon_v2_pokemonsprites: Pokemon_V2_Sprites
}
