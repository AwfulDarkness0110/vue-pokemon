<script setup lang="ts">
import PokemonList from './components/PokemonList.vue'
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { usePokemonStore } from './stores'

const store = usePokemonStore()
const { result, loading, error } = storeToRefs(store)
const { loadMore } = store
const total = computed(() => result?.value?.pokemon_v2_pokemon?.length ?? 0)

</script>

<template>
  <p v-if="loading">Loading...</p>
  <p v-else-if="error">{{ error }}</p>
  <p v-if="result">{{ total }} pokemons</p>
  <pokemon-list :pokemons="result?.pokemon_v2_pokemon" :loading="loading" :error="error?.message">
    <v-btn class="mt-8" @click="loadMore" :loading="loading">Load More</v-btn>
  </pokemon-list>
</template>
