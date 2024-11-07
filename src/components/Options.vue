<template>
  <div class="options-container" ref="optionsContainer">
    <Swiper
      ref="swiperRef"
      :spaceBetween="20"
      :slidesPerView="'auto'"
      :breakpoints="{
        1200: {
          spaceBetween: 20,
        },
        1440: {
          spaceBetween: 30,
        },
      }"
      :speed="1000"
      class="swiper"
      @swiper="onSwiper"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
    >
      <SwiperSlide
        v-for="(option, index) in options"
        :key="index"
        class="border"
        :class="{ 'active-slide': isIntersecting }"
      >
        <div class="img-wrapper">
          <v-img :src="option.image" class="image"></v-img>
        </div>
        <h1 class="title">{{ option.title }}</h1>
        <transition name="fade">
          <div v-if="isIntersecting" class="description-wrapper">
            <h2 class="description">{{ option.description }}</h2>
          </div>
        </transition>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

const options = [
  {
    image: "/options/kiss.png",
    title: "Undress Anyone Online",
    description:
      "Instantly undress any person, celebrity, or even a stranger online in just seconds!",
  },
  {
    image: "/options/drops.png",
    title: "Add another person",
    description:
      "Add a second character to the scene and recreate your wildest fantasies!",
  },
  {
    image: "/options/letter.png",
    title: "The widest AI possibilities",
    description:
      "Don't just strip, but also create sex scenes between two people in a few simple clicks!",
  },
  {
    image: "/options/heart.png",
    title: "Unique, High-Quality Pics",
    description:
      "Get exclusive, high-quality photos that are truly one-of-a-kind and won’t be found anywhere else",
  },
  {
    image: "/options/dizzy.png",
    title: "Nudify Without an App",
    description:
      "No need to clutter your phone with an app or waste valuable time! Simply log in to your account",
  },
];

const isIntersecting = ref(false);
const observer = ref(null);

const observeCarousel = () => {
  const optionsContainer = document.querySelector(".options-container");

  observer.value = new IntersectionObserver(
    ([entry]) => {
      isIntersecting.value = entry.isIntersecting;
      if (isIntersecting.value) {
        startAutoplay(); // Запуск автопереключения при появлении
      } else {
        stopAutoplay(); // Остановка автопереключения при исчезновении
      }
    },
    { threshold: 0.2 } // Adjust the threshold as needed
  );

  observer.value.observe(optionsContainer);
};

const swiperInstance = ref(null);
let autoplayInterval = null;
const isHovered = ref(false);

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
};

const startAutoplay = () => {
  const flag = ref(true);
  autoplayInterval = setInterval(() => {
    if (swiperInstance.value && flag.value) {
      swiperInstance.value.slideNext();
      flag.value = !flag.value;
    } else {
      swiperInstance.value.slidePrev();
      flag.value = !flag.value;
    }
  }, 4000);
};

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
    autoplayInterval = null;
  }
};

const onMouseEnter = () => {
  stopAutoplay();
  isHovered.value = true;
};

const onMouseLeave = () => {
  isHovered.value = false;
  startAutoplay();
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
.options-container {
  margin-top: 80px;
  width: 100%;
}

.swiper {
  padding-left: 20px;
  padding-right: 20px;
}

.swiper-slide {
  height: 150px;
  width: 300px;
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  padding: 20px;
  transition: height 0.5s ease;
}

.active-slide {
  height: 275px; /* Высота при пересечении */
}

.img-wrapper {
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 100%;
}

.image {
  width: 40px;
  height: 40px;
}

.title {
  margin-top: 20px;
  font-size: 26px;
  color: #202122;
}

.description-wrapper {
  margin-top: auto;
  height: 100px;
  display: flex;
  align-items: end;
}

.description {
  font-size: 18px;
}
@media screen and (min-width: 600px) {
  .swiper {
    padding-left: 80px;
    padding-right: 80px;
  }
  .swiper-slide {
    height: 200px;
    width: 300px;
    padding: 40px;
  }

  .active-slide {
    height: 340px;
  }

  .img-wrapper {
    height: 100px;
    width: 100px;
  }

  .image {
    width: 60px;
    height: 60px;
  }

  .title {
    font-size: 30px;
  }

  .description-wrapper {
    height: 130px;
  }

  .description {
    font-size: 20px;
    color: #7c7c7c;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
