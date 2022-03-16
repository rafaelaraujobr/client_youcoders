<template>
  <q-page padding>
    <q-table :data="rows" row-key="id" grid>
      <template v-slot:item="props">
        <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4">
          <q-card flat bordered>
            <q-card-section class="row">
              <div class="col-4">
                <q-img
                  :src="props.row.snippet.thumbnails.medium.url"
                  spinner-color="primary"
                  spinner-size="82px"
                />
              </div>
              <div class="col-8">
                <!-- {{ props.row.snippet }} -->
                <q-item>
                  <q-item-section>
                    <q-item-label>{{ props.row.snippet.title }}</q-item-label>
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
  </q-page>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {};
  },
};
</script>
