<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters>
      <v-col cols="12" md="6">
        <div class="block-1">
          <h1 class="logo">AI Nudes</h1>
          <p class="description text-center">
            Advanced AI system that allows you to create a high-quality nude
            images and <span class="description-black">scenes from photos</span>
          </p>
          <div class="mt-12 d-flex flex-column flex-md-row ga-4">
            <v-btn class="launch-btn"
              ><span class="btn-text">Launch up!</span></v-btn
            >
            <v-btn class="how-btn"
              ><span class="btn-text">How it works?</span></v-btn
            >
          </div>
        </div>
      </v-col>

      <v-col cols="12" md="6">
        <MainCarousel />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.block-1 {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 500;
  height: 450px;
}

.logo {
  color: #2e2828;
  font-size: 80px;
  letter-spacing: -3.48px;
  line-height: 140%;
}

.v-theme--dark .logo {
  color: white;
  transition: color 0.3s;
}
.description {
  color: #7c7c7c;
  padding-left: 70px;
  padding-right: 70px;
  font-size: 18px;
}

.v-theme--dark .description {
  color: white;
  transition: color 0.3s;
}
.description-black {
  color: black;
  font-weight: 700;
}

.v-theme--dark .description-black {
  color: white;
  transition: color 0.1s;
}

.small-logo {
  font-size: 24px;
}

.launch-btn {
  width: 200px;
  height: 60px !important;
  background-color: #ffbaf3;
  border-radius: 75px;
  color: #080507;

  &:hover {
    background-color: #fd7ee8;
  }
}

.how-btn {
  width: 200px;
  height: 60px !important;
  background-color: white;
  color: #2e2828;
  border-radius: 75px;
}

.btn-text {
  color: #080507;

  font-size: 18px;
  letter-spacing: 0.7px;
}

@media (min-width: 768px) {
  .logo {
    font-size: 125px;
    letter-spacing: -7.48px;
  }

  .description {
    padding-left: 120px;
    padding-right: 120px;
    font-size: 20px;
  }
}
</style>
