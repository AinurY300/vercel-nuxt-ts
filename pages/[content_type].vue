<script setup lang="ts">
import { Database } from '@/models/supabase.types'
const route = useRoute()
const type = String(route.params.content_type).toUpperCase()
const supabase = useSupabaseClient<Database>()
const { data: collection, count } = await supabase.from('movies')
  .select('*', { count: 'exact' })
  .eq('type', type)
</script>

<template>
  <v-container>
    <v-row align="end">
      <v-col>
        <h1>
          {{ 
            type == 'FILMS' ? 'Фильмы' :  
            type == 'SERIALS' ? 'Сериалы' :
            type == 'MULTFILMS' ? 'Мультфильмы' :
            type == 'MULTSERIALS' ? 'Мультсериалы' : null
          }}
        </h1>
        <p v-if="type == 'FILMS'">Добро пожаловать! Почему бы не насладиться некоторыми захватывающими фильмами сегодня?<br>Давайте посмотрим что-то новое и увлекательное вместе!</p>
        <p v-if="type == 'SERIALS'">Привет! Хочешь погрузиться в увлекательный мир персонажей и их историй? Приготовься к марафону сериалов и открой для себя новые миры, полные приключений, романтики и интриг!</p>
        <p v-if="type == 'MULTFILMS'">Отправляйся в волшебный мир мультфильмов и получай заряд положительных эмоций!</p>
        <p v-if="type == 'MULTSERIALS'">Открой мир волшебства и приключений! Не пропусти шанс окунуться в мультсериалы, которые захватят тебя своей захватывающей историей. Мультфильмы - это идеальное развлечение для всей семьи.</p>
      </v-col>
      <v-col cols="3">
        <v-select
          label="Сортировать"
          prepend-inner-icon="mdi-sort"
          hide-details
          model-value="По умолчанию"
          :items="['По умолчанию', 'По рейтингу', 'По дате выхода']"
        />
      </v-col>
    </v-row>
    <v-row>
     
      <v-col :cols="2" v-for="film in collection">
        <v-film-card 
          :to="`/watch/${film.id}`"
          :kinopoisk_id="film.kinopoisk_id"
          :poster_url="film.poster_url || undefined"
          :title="film.name_ru || film.name_original"
          :year="film.year"
          :genres="film.genres || undefined"
          :rating="film.rating_kinopoisk || film.rating_imdb || undefined"
        />
      </v-col>
    </v-row>
  </v-container>
</template>