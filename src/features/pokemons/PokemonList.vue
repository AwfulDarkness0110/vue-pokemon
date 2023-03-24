<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { watch, computed } from 'vue'

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
  <v-container v-if="result">
    <v-row dense>
      <v-col cols="12" md="4" v-for="pokemon in result.pokemon_v2_pokemon" :key="pokemon.id">
        <v-card class="mx-auto">
          <v-img class="align-end" height="200"
            :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`">
            <v-card-title v-text="pokemon.name"></v-card-title>
          </v-img>
        </v-card>
      </v-col>
    </v-row>

    <v-btn class="mt-8" @click="loadMore" :loading="loading">Load More</v-btn>
  </v-container>
</template>
