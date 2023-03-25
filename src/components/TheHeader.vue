<template>
  <v-app-bar :elevation="2" color="primary">
    <template v-slot:prepend>
      <v-app-bar-nav-icon class="d-md-none"></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title>
      <router-link :to="{ name: 'PokemonPage' }">
        <v-avatar size="x-large">
          <v-img src="/pokemon.png" alt="Pokemon Logo"></v-img>
        </v-avatar>
      </router-link>
    </v-app-bar-title>
  </v-app-bar>
</template>
