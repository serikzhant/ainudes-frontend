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
import { pink } from 'vuetify/util/colors'

const lightTheme = {
  dark: false,
  colors: {
    
  }
}

const darkTheme = {
  dark: true,
  colors: {
    
  }
}

export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: lightTheme,
      dark: darkTheme
    }
  },
})
