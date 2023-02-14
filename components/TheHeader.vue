<script setup lang="ts">
console.log()
</script>

<template>
  <v-app-bar flat>
    <v-container>
      <v-row align="center">
        <v-col>
          <v-tabs slider-color="primary">
            <v-tab to="/">Главная</v-tab>
            <v-tab to="/films">Фильмы</v-tab>
            <v-tab to="/serials">Сериалы</v-tab>
            <v-tab to="/multfilms">Мультфильмы</v-tab>
            <v-tab to="/multserials">Мультсериалы</v-tab>
          </v-tabs>
        </v-col>
        <v-spacer/>
        <v-col cols="auto">
          <v-btn icon="mdi-bookmark-outline"></v-btn>
          <v-dialog max-width="373">
            <template #activator="{ props }">
              <v-btn class="bg-primary" v-bind="props" border>Войти</v-btn>
            </template>
            <v-auth-form/>
          </v-dialog>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>