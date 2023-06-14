<template>
  <div>
    <div>
      <figure class="carousel">
        <div class="overlay">Travel Tales and Trails</div>
        <div class="slider-container">
          <img
            v-for="(slide, index) in slides"
            :key="index"
            :class="['myslide', { active: index === activeSlide }]"
            :src="slide"
          >
        </div>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeSlide: 0,
      slides: [
        require("@/static/1.jpg"),
        require("@/static/2.jpg"),
        require("@/static/3.jpg"),
        require("@/static/4.jpg")
      ]
    };
  },
  mounted() {
    this.startCarousel();
  },
  methods: {
    startCarousel() {
      setInterval(() => {
        this.activeSlide++;
        if (this.activeSlide >= this.slides.length) {
          this.activeSlide = 0;
        }
      }, 3000);
    }
  }
};
</script>

<style>
.carousel {
  position: relative;
  height: 693px;
  width: 100%;
}

.overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  color: white;
  font-weight: bold;
  text-shadow: 1px 1px #000;
  z-index: 1;
}

.slider-container {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.myslide {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  transform: translateX(-100%);
  transition: transform 0.5s;
}

.myslide.active {
  transform: translateX(0);
}

</style>
