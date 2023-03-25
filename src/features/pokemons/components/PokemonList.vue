<script setup lang="ts">
import type { Pokemon_V2_Pokemon } from '../types'
import PokemonImage from './PokemonImage.vue'
import ToggleFavorite from './ToggleFavorite.vue'

interface Props {
  pokemons?: Pokemon_V2_Pokemon[],

}

defineProps<Props>()
</script>

<template>
  <v-container v-if="pokemons">
    <v-row dense>
      <v-col cols="12" md="4" v-for="pokemon in pokemons" :key="pokemon.id">
        <v-card class="mx-auto">
          <pokemon-image :pokemon-id="pokemon.id">
            <v-card-title>{{ pokemon.name }}</v-card-title>
          </pokemon-image>

          <v-card-actions>
            <v-spacer></v-spacer>
            <toggle-favorite :pokemon-id="pokemon.id"></toggle-favorite>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <slot></slot>
  </v-container>
</template>
