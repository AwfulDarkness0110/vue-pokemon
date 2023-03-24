<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import PokemonList from './PokemonList.vue'
import { computed } from 'vue';

const { result, loading, error, fetchMore } = useQuery(gql`
  query getPokemons ($offset: Int, $limit: Int) {
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
  }`, () => ({
  offset: 0,
  limit: 20
}))

const total = computed(() => result?.value?.pokemon_v2_pokemon?.length ?? 0);

function loadMore() {
  fetchMore({
    variables: {
      offset: result.value.pokemon_v2_pokemon.length
    },
    updateQuery: (previousResult, { fetchMoreResult }) => {
      // No new feed posts
      if (!fetchMoreResult) return previousResult

      // Concat previous feed with new feed posts
      return {
        ...previousResult,
        pokemon_v2_pokemon: [
          ...previousResult.pokemon_v2_pokemon,
          ...fetchMoreResult.pokemon_v2_pokemon
        ]
      }
    }
  })
}
</script>

<template>
  <p v-if="loading">Loading...</p>
  <p v-else-if="error">{{ error }}</p>
  <p v-if="result">{{ total }} pokemons</p>
  <pokemon-list :pokemons="result?.pokemon_v2_pokemon" :loading="loading" :error="error?.message">
    <v-btn class="mt-8" @click="loadMore" :loading="loading">Load More</v-btn>
  </pokemon-list>
</template>
