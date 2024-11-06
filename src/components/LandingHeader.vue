<template>
  <v-app-bar height="80" elevation="0">
    <v-container fluid>
      <v-row>
        <v-col class="logo" cols="4">
          <v-toolbar-title>
            <v-btn
              to="/"
              :ripple="false"
              :active="false"
              class="no-hover-opacity"
            >
              <span class="title-ai">AI</span>
              <span class="title-nudes">Nudes</span>
            </v-btn>
          </v-toolbar-title>
        </v-col>
        <v-col cols="4" class="d-flex align-center justify-center">
          <v-btn>
            <span class="anchor-tag">Possibilities</span>
          </v-btn>
          <v-btn> <span class="anchor-tag">Instructions</span></v-btn>
          <v-btn> <span class="anchor-tag">Pricing</span></v-btn>
        </v-col>
        <v-col cols="4" class="text-right pr-4">
          <v-btn
            class="mr-2"
            icon="mdi-theme-light-dark"
            @click="toggleTheme"
          ></v-btn>
          <v-btn
            min-height="40"
            min-width="150"
            rounded="xl"
            size="x-large"
            to="/"
            class="login-btn"
          >
            <h4 class="login">Login/Register</h4>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script setup>
import { useTheme } from "vuetify";
const theme = useTheme();

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}
</script>

<style scoped>
.title-ai {
  color: #ffbaf3;
  font-size: 24px; /* Цвет для слова AI */
  letter-spacing: -0.7px;
}

.title-nudes {
  color: var(--v-theme-on-background);
  transition: color 0.9s ease;
  margin-left: 3px;
  font-size: 24px;
  letter-spacing: -0.7px;
}

.logo {
  display: flex;
  align-items: center;
  padding-left: 35px;
}

.no-hover-opacity {
  --v-hover-opacity: 0 !important;
  padding-left: 0px;
}

.anchor-tag {
  color: var(--v-theme-on-background);
  opacity: 0.6;
  transition: color 0.3s;
  font-size: 18px;
  letter-spacing: 0px;
}

.v-theme--light .login-btn {
  background-color: black;
}

.v-theme--light .login {
  color: white;

  transition: color 0.3s;
  font-size: 18px;
  letter-spacing: 0px;
  font-weight: 700;
}

.v-theme--dark .login-btn {
  background-color: #333333;
}

.v-theme--dark .login {
  color: white;

  transition: color 0.3s;
  font-size: 18px;
  letter-spacing: 0px;
  font-weight: 700;
}
</style>
