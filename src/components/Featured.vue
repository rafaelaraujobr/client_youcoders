<template>
  <div class="row">
    <div class="col-8">
      <q-carousel animated v-model="slide" infinite>
        <q-carousel-slide name="soft-jazz">
          <q-video
            class="absolute-full"
            src="https://www.youtube.com/embed/k3_tw44QsZQ"
          />
        </q-carousel-slide>

        <q-carousel-slide name="Rihanna">
          <q-video
            class="absolute-full"
            src="https://www.youtube.com/embed/kOkQ4T5WO9E"
          />
        </q-carousel-slide>

        <q-carousel-slide name="ibiza">
          <q-video
            class="absolute-full"
            src="https://www.youtube.com/embed/p87miJIYEEk"
          />
        </q-carousel-slide>
      </q-carousel>
    </div>
    <div class="col-4">
      <q-card flat bordered v-for="(item, index) in registers" :key="index">
        <q-item>
          <q-item-section avatar>
            <q-img
              :src="item.snippet.thumbnails.medium.url"
              spinner-color="primary"
              height="100px"
              spinner-size="82px"
          /></q-item-section>
          <q-item-section>
            <q-item-label>{{ item.snippet.title }}</q-item-label>
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
    <!-- <div class="row justify-center">
      <q-btn-toggle
        glossy
        v-model="slide"
        :options="[
          { label: 'Soft Jazz', value: 'soft-jazz' },
          { label: 'Rihanna', value: 'Rihanna' },
          { label: 'Ibiza Mix', value: 'ibiza' },
        ]"
      />
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    registers: Array,
  },
  data() {
    return {
      slide: "Rihanna",
    };
  },
};
</script>

<style>
</style>