<template>
  <div class="h-fit swiper">
    <div class="swiper-wrapper">
      <div v-for="(banner, index) in banners" :key="index" class="swiper-slide">
        <a :href="banner.url">
          <img :src="banner.image">
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Swiper from 'swiper'
import 'swiper/css'
import { Options, Vue } from 'vue-property-decorator'

@Options({})
export default class SwiperComponent extends Vue {
  swiper!: Swiper

  banners = [
    {
      image: 'https://theme.hstatic.net/200000201725/1000749045/14/slideshow_2.jpg',
      url: '#',
    },
    {
      image: 'https://theme.hstatic.net/200000201725/1000749045/14/slideshow_4.jpg',
      url: '#',
    },
  ]

  mounted() {
    this.swiper = new Swiper(this.$el)
  }

  beforeUnmount() {
    this.swiper.destroy()
  }
}
</script>
