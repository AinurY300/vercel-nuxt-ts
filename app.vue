<script setup lang="ts">
const supabase = useSupabaseClient()
const { data: countries } = await supabase.from('countries').select('*')
</script>

<template>
  <div>
    <h1>Привет мир!</h1>
    <p>{{ countries }}</p>
  </div>
</template>

