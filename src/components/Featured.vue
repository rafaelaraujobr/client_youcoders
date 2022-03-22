<template>
  <div class="row">
    <div class="col-8">
      <q-carousel animated v-model="slide" infinite>
        <q-carousel-slide
          :name="index"
          v-for="(item, index) in registers"
          :key="index"
        >
          <q-video
            class="absolute-full"
            :src="`https://www.youtube.com/embed/${item.id.videoId}`"
          />
        </q-carousel-slide>
      </q-carousel>
    </div>
    <div class="col-4">
      <q-card flat bordered v-for="(item, index) in registers" :key="index">
        <q-item clickable @click="slide = index">
          <q-item-section avatar>
            <q-img
              :src="item.snippet.thumbnails.medium.url"
              spinner-color="primary"
              width="205px"
              :ratio="16 / 9"
              spinner-size="82px"
          /></q-item-section>
          <q-item-section>
            <q-item-label lines="2">{{ item.snippet.title }}</q-item-label>
            <q-item-label caption lines="1">{{
              item.snippet.publishTime
            }}</q-item-label>
            <q-item-label caption lines="1">{{
              item.snippet.channelTitle
            }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    registers: Array,
  },
  data() {
    return {
      slide: 0,
    };
  },
};
</script>

<style>
</style>