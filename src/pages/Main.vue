<template>
  <q-page padding>
    <q-table :data="rows" row-key="id" grid :pagination="initialPagination">
      <template v-slot:item="props">
        <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xs-3">
          <q-card
            flat
            bordered
            @click="(dialog = true), (videoSelect = props.row)"
          >
            <q-card-section class="row">
              <div class="col-6">
                <q-img
                  :ratio="16 / 9"
                  :src="props.row.snippet.thumbnails.medium.url"
                  spinner-color="primary"
                  spinner-size="82px"
                />
              </div>
              <div class="col-6">
                <!-- {{ props.row.snippet }} -->
                <q-item>
                  <q-item-section>
                    <q-item-label lines="2">{{
                      props.row.snippet.title
                    }}</q-item-label>
                    <q-item-label caption lines="1">{{
                      props.row.snippet.publishTime
                    }}</q-item-label>
                    <q-item-label caption lines="1">{{
                      props.row.snippet.channelTitle
                    }}</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section>
                    <q-item-label caption lines="2">{{
                      props.row.snippet.description
                    }}</q-item-label>
                  </q-item-section>
                </q-item>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </template>
    </q-table>
    <q-dialog v-model="dialog" persistent :maximized="maximizedToggle">
      <q-card
        flat
        :style="
          !isMobile ? 'min-width: 610px; max-width: 70vw; max-height: 90vh' : ''
        "
      >
        <q-toolbar>
          <q-toolbar-title class="text_subtitle1"> Visualizar </q-toolbar-title>
          <q-btn
            dense
            flat
            round
            icon="crop_square"
            @click="maximizedToggle = !maximizedToggle"
          >
            <q-tooltip content-class="bg-primary text-white text-subtitle2"
              >Maximize</q-tooltip
            >
          </q-btn>
          <q-btn flat round dense icon="mdi-close" @click="dialog = false">
            <q-tooltip content-class="bg-white text-dark">Fechar</q-tooltip>
          </q-btn>
        </q-toolbar>
        <q-card-section
          :style="
            isMobile
              ? `height:${$q.screen.height - (94 + 16 + 60)}px`
              : !maximizedToggle
              ? 'max-height: 60vh'
              : ''
          "
          class="scroll"
        >
          <q-video
            v-if="videoSelect"
            :ratio="16 / 9"
            :src="`https://www.youtube.com/embed/${videoSelect.id.videoId}`"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  name: "MainPage",
  props: {
    tokenGoogle: {
      type: String,
    },
    profile: {
      type: String,
    },
  },
  data() {
    return {
      dialog: false,
      maximizedToggle: false,
      videoSelect: null,
      initialPagination: {
        sortBy: "desc",
        descending: false,
        page: 1,
        rowsPerPage: 24,
        // rowsNumber: xx if getting data from a server
      },
    };
  },
  created() {
    if (this.tokenGoogle) {
      this.ActionSetToken(this.tokenGoogle);
      localStorage.setItem("youcoders_token", this.tokenGoogle);
    }
    if (this.profile) this.ActionSetUser(JSON.parse(this.profile));
    this.getSearch(this.search);
  },
};
</script>

