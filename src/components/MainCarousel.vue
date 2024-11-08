<template>
  <div class="carousel-container" ref="carouselContainer">
    <Swiper
      ref="swiperRef"
      :loop="true"
      @slideChange="onSlideChange"
      @swiper="onSwiper"
      class="swiper"
      :speed="1000"
    >
      <SwiperSlide v-for="(photo, index) in photos" :key="index">
        <div class="slide-content">
          <div class="image-wrapper">
            <img :src="`/girls/${photo.top}`" class="image" />
            <div
              class="secimage-wrapper"
              :class="{
                'animated-padding': isIntersecting && realIndex === index,
                'active-slide': realIndex === index,
              }"
            >
              <img :src="`/girls/${photo.bottom}`" class="secimage" />
            </div>
            <v-btn @click="handlePrev" icon="mdi-undo" class="undo-btn"></v-btn>
            <v-btn @click="handleNext" icon="mdi-redo" class="redo-btn"></v-btn>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

const photos = ref([
  { top: "pic-1.png", bottom: "pic-2.png" },
  { top: "pic-4.png", bottom: "pic-3.png" },
  { top: "pic-6.png", bottom: "pic-5.png" },
]);

const realIndex = ref(0);

const swiperInstance = ref(null);

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
};

const onSlideChange = (swiper) => {
  realIndex.value = swiper.realIndex;
};

const handlePrev = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slidePrev();
  }
};

const handleNext = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slideNext();
  }
};

const isIntersecting = ref(false);
const observer = ref(null);

const observeCarousel = () => {
  const carouselContainer = document.querySelector(".carousel-container");

  observer.value = new IntersectionObserver(
    ([entry]) => {
      isIntersecting.value = entry.isIntersecting;
    },
    { threshold: 0.3 } // Adjust the threshold as needed
  );

  observer.value.observe(carouselContainer);
};

onMounted(() => {
  observeCarousel();
});

onUnmounted(() => {
  if (observer.value) {
    observer.value.disconnect();
  }
});
</script>

<style scoped>
.swiper {
  padding-top: 10px;
}

.slide-content {
  height: 600px;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.carousel-container {
  margin-top: 80px;
}

.image-wrapper {
  height: 100%;
  position: relative;
}

.image {
  height: 100%;
  object-fit: cover;
  border-radius: 40px;
}

.secimage-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  padding-left: 90%; /* Начальное значение для анимации */
  transition: padding-left 2s ease-in-out; /* Плавный переход для раскрытия */
  border-radius: 40px;
}

.secimage-wrapper.active-slide {
  padding-left: 90%; /* Конечное значение для раскрытия */
}

.secimage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: right;
  border-left: 2px solid white;
}

.animated-padding.active-slide {
  animation: slidePadding 5s ease-in-out infinite;
}

.undo-btn {
  position: absolute;
  bottom: 5%;
  left: 10%;
  z-index: 1;
  width: 40px;
}

.redo-btn {
  position: absolute;
  bottom: 5%;
  right: 10%;
  width: 40px;
  z-index: 1;
}

@keyframes slidePadding {
  0% {
    padding-left: 90%;
  }
  50% {
    padding-left: 10%;
  }
  100% {
    padding-left: 90%;
  }
}

@media screen and (min-width: 600px) {
  .slide-content {
    height: 700px;
  }

  .carousel-container {
    margin-top: 10px;
  }
}
</style>
