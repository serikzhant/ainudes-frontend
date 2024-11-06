/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import '../styles/main.css'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'myCustomTheme',
    themes: {
      myCustomTheme: {
          colors: {
              primary: '#2196F3', // Задайте свои цвета, если нужно
              // другие цвета...
          },
          variables: {
              fontFamily: 'Onest, sans-serif', // Замените на свой шрифт
          },
      },
  },
  },
})
