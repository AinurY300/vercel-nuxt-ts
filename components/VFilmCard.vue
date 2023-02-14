<script setup lang="ts">
import { Database } from '~~/models/supabase.types';

const props = defineProps<{
  to: string,
  kinopoisk_id: Database['public']['Tables']['movies']['Row']['kinopoisk_id'],
  poster_url?: Database['public']['Tables']['movies']['Row']['poster_url'],
  title?: Database['public']['Tables']['movies']['Row']['name_ru'],
  genres?: Database['public']['Tables']['movies']['Row']['genres'],
  rating?: Database['public']['Tables']['movies']['Row']['rating_kinopoisk'],
  year?: Database['public']['Tables']['movies']['Row']['year']
}>()
</script>

<template>
  <v-card color="background" class="card" elevation="0" :to="props.to" variant="elevated">
    <v-img cover :src="`${props.poster_url}`" style="aspect-ratio: 2/3">
      
    </v-img>
    <v-card-title class="pa-2 text-subtitle-2 font-weight-bold">
      <v-chip 
        label
        size="x-small" 
        class="font-weight-bold" 
        v-if="props.rating" 
      >
        {{ props.rating }}
      </v-chip>
      {{ props.title }}
      <v-card-subtitle class="pa-0">
        <span v-if="props.year">{{ props.year }}, </span>
        <span v-if="props.genres">{{ props.genres.map(g => g).join(', ') }}</span>
      </v-card-subtitle>
    </v-card-title>
  </v-card>
</template>