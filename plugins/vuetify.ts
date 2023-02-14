import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    components,
    directives,
    ssr: true,

    defaults: {
      VBtn: { 
        variant: 'outlined',
        evelation: '0' 
      },
      VCard: { 
        evelation: '0' 
      }
    },
    
    theme: {
      defaultTheme: 'dark',
      themes: {
        dark: {
          colors: {
            'primary': '#0000f5'
          }
        },
        ligth: {
          
        }
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})
