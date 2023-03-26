import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const usePokemonStore = defineStore('pokemonStore', () => {
  const { result, loading, error, fetchMore } = useQuery(
    gql`
      query getPokemons($offset: Int, $limit: Int) {
        pokemon_v2_pokemon(offset: $offset, limit: $limit) {
          id
          name
          weight
          height
          is_default
          pokemon_v2_pokemonsprites {
            sprites
          }
        }
      }
    `,
    () => ({
      offset: 0,
      limit: 20,
    })
  );

  function loadMore(): void {
    void fetchMore({
      variables: {
        offset: result.value.pokemon_v2_pokemon.length,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        // No new feed posts
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        if (!fetchMoreResult) return previousResult;

        // Concat previous feed with new feed posts
        return {
          ...previousResult,
          pokemon_v2_pokemon: [
            ...previousResult.pokemon_v2_pokemon,
            ...fetchMoreResult.pokemon_v2_pokemon,
          ],
        };
      },
    });
  }

  const favorites = reactive(new Set<number>());

  const toggleFavorite = (pokemonId: number): void => {
    if (favorites.has(pokemonId)) {
      favorites.delete(pokemonId);
    } else {
      favorites.add(pokemonId);
    }
  };

  return { result, loading, error, loadMore, favorites, toggleFavorite };
});
