<script setup lang="ts">
const supabase = useSupabaseClient()

const credentials = reactive({
  email: '',
  password: ''
})

const errorMessgage = reactive({
  email: '',
  password: ''
})

const loading = ref(false)
const submit = async function() {
  loading.value = true
  const { error } = await supabase.auth.signUp({
    email: credentials.email,
    password: credentials.password,
    options: {
      data: {
        username: credentials.email
      }
    }
  })

  if (error?.message == 'User already registered') {
    const { error, data } = await supabase.auth.signInWithPassword(credentials)
    console.log(error)
    if (error?.message == 'Invalid login credentials') {
      errorMessgage.email = 'Неверный Email или пароль'
      errorMessgage.password = 'Неверный Email или пароль'
    }
  } 
  else {
    switch (error?.message) {
      case 'To signup, please provide your email':
        errorMessgage.email = 'Пожалуйста, не оставляйте это поле пустым'
        break;
      case 'Unable to validate email address: invalid format':
        errorMessgage.email = 'Введите настроящий E-mail'
        break;
      case 'Signup requires a valid password':
        errorMessgage.password = 'Пожалуйста, не оставляйте это поле пустым'
        break;
      case 'Password should be at least 6 characters':
        errorMessgage.password = 'Минимальная длина пароля 6 символов'
        break;
      default: 
        console.log(error?.message)
        break;
    }
  }
  loading.value = false
}
</script>

<template>
  <v-card class="pa-6" elevation="0" border>
    <v-form @submit.prevent="submit">
      <v-card-title>Вход</v-card-title>
      <v-card-text class="text-capiton pb-0">Аккаунт будет создан автоматически, если вы еще не зарегестрированны</v-card-text>
      <v-card-text>
        <v-text-field
          autofocus
          class="mb-2"
          type="email" 
          label="Электронная почта"
          v-model="credentials.email" 
          :error-messages="errorMessgage.email"
          @update:model-value="errorMessgage.email = ''"
        />
        <v-text-field
          label="Пароль" 
          messages="Минимальная длинна пароля 6 символов"
          v-model="credentials.password" 
          :error-messages="errorMessgage.password" 
          @update:model-value="errorMessgage.password = ''"
        />
      </v-card-text>
      <v-card-actions class="pa-4 pt-0">
        <v-btn :loading="loading" type="submit" border class="bg-primary py-5" block>Войти</v-btn> 
      </v-card-actions>
    </v-form>
  </v-card>
</template>

