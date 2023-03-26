<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';
import PokemonList from './components/PokemonList.vue';
import { usePokemonStore } from './stores';
import type { Pokemon_V2_Pokemon } from './types';

const items = [
  {
    text: 'Pokemons',
    icon: 'mdi-paw',
  },
  {
    text: 'Favorites',
    icon: 'mdi-heart',
  },
];

const store = usePokemonStore();
const { result, loading, error, favorites } = storeToRefs(store);
const { loadMore } = store;
const currentItem = ref<number>(0);

const onlyFavorites = computed(() => Boolean(currentItem.value));
const filtered = computed(() =>
  result.value?.pokemon_v2_pokemon.filter((p: Pokemon_V2_Pokemon) =>
    favorites.value.has(p.id)
  )
);
const pokemons = computed(() =>
  onlyFavorites.value ? filtered.value : result.value?.pokemon_v2_pokemon
);
const total = computed(() => pokemons.value?.length);

const subtitle = computed(() =>
  0 + total.value > 0
    ? `${total.value} pokemons in ${
        onlyFavorites.value ? 'favorites' : 'the list'
      }`
    : 'No pokemons in this section yet!'
);
</script>

<template>
  <v-bottom-navigation
    v-model="currentItem"
    active
    grow
    horizontal
    :elevation="3"
  >
    <v-btn v-for="item in items" :key="item.text" variant="text">
      <v-icon>{{ item.icon }}</v-icon>
      {{ item.text }}
    </v-btn>
  </v-bottom-navigation>

  <p v-if="subtitle">{{ subtitle }}</p>

  <v-progress-circular v-if="loading" indeterminate :size="62" :width="7">
    <p class="d-sr-only">Loading...</p>
  </v-progress-circular>
  <v-alert
    v-else-if="error"
    type="error"
    icon="$error"
    :title="error.name"
    :text="error.message"
  ></v-alert>

  <pokemon-list :pokemons="pokemons">
    <v-btn
      v-if="!onlyFavorites"
      class="mt-8"
      :loading="loading"
      @click="loadMore"
      >Load More</v-btn
    >
  </pokemon-list>
</template>
