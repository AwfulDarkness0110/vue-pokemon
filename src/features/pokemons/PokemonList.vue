<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { watch, computed } from 'vue'

const { result, loading, error } = useQuery(gql`
  query getPokemons {
    pokemon_v2_pokemon(limit: 20, offset: 0) {
      id
      name
      weight
      height
      is_default
      pokemon_v2_pokemonsprites {
        sprites
      }
    }
  }`)

const sprites = computed(() => result.value.pokemon_v2_pokemon.map((s) => ({
  id: s.id,
  sprites: JSON.parse(s.pokemon_v2_pokemonsprites[0].sprites)
}))
)
</script>

<template>
  <p v-if="loading">Loading...</p>
  <p v-else-if="error">{{ error }}</p>
  <v-container v-else-if="result">
    <v-row dense>
      <v-col cols="12" md="4" v-for="pokemon in result.pokemon_v2_pokemon" :key="pokemon.id">
        <v-card>
          <v-img
            :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`">
            <v-card-title v-text="pokemon.name"></v-card-title>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
