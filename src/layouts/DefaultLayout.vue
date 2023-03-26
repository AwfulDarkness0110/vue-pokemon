<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue';
</script>

<template>
  <v-card>
    <v-layout>
      <the-header></the-header>
      <v-main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-main>
      <footer>...</footer>
    </v-layout>
  </v-card>
</template>
