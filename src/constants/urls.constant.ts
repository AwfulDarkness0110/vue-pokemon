export const BASE_ENDPOINT = import.meta.env.ENDPOINT ?? 'https://pokeapi.co/api/v2/'

export enum POKEMON_ENDPOINT {
  'POKEMON' = `${BASE_ENDPOINT}pokemon`,
  'TYPE' = `${BASE_ENDPOINT}type`
}
