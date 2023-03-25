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
  <v-progress-circular indeterminate v-if="loading" :size="62" :width="7">
    <p class="d-sr-only">Loading...</p>
  </v-progress-circular>
  <v-alert v-else-if="error" type="error" icon="$error" :title="error.name" :text="error.message"></v-alert>
  <p v-if="result">{{ total }} pokemons</p>
  <pokemon-list :pokemons="result?.pokemon_v2_pokemon">
    <v-btn class="mt-8" @click="loadMore" :loading="loading">Load More</v-btn>
  </pokemon-list>
</template>
