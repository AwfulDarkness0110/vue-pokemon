<script setup lang="ts">
defineProps({
  pokemons: {
    type: Array,
    default: () => []
  },
  loading: Boolean,
  error: String
})
</script>

<template>
  <p v-if="loading">Loading...</p>
  <p v-else-if="error">{{ error }}</p>
  <v-container>
    <v-row dense>
      <v-col cols="12" md="4" v-for="pokemon in pokemons" :key="pokemon.id">
        <v-card class="mx-auto">
          <v-img class="align-end" height="200"
            :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`">
            <v-card-title>{{ pokemon.name }}</v-card-title>
          </v-img>
        </v-card>
      </v-col>
    </v-row>

    <slot></slot>
  </v-container>
</template>
