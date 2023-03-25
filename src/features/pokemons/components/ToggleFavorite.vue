<script setup lang="ts">
import { computed } from 'vue';
import { usePokemonStore } from '../stores'

const props = defineProps<{ pokemonId: number }>()
const store = usePokemonStore()
const { toggleFavorite } = store
const buttonColor = computed(() => store.favorites.has(props.pokemonId) ? 'primary' : 'surface-variant')
const actionText = computed(() => `${store.favorites.has(props.pokemonId) ? 'Remove' : 'Add'} Favorite`)
</script>

<template>
  <v-btn @click="toggleFavorite(pokemonId)" :aria-label="actionText" size="small" :color="buttonColor" variant="text"
    icon="mdi-heart">
  </v-btn>
</template>
