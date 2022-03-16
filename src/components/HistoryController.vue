<template>
  <q-btn flat dense round icon="mdi-calendar-clock">
    <q-menu>
      <q-list style="min-width: 200px">
        <q-item clickable v-close-popup>
          <q-item-section>Historico de pesquisa</q-item-section>
        </q-item>
        <q-item
          clickable
          v-close-popup
          v-for="(history, index) in histories"
          :key="index"
          @click.stop="ActionSetSearch(history.value), getSearch()"
        >
          <q-item-section>
            <q-item-label>{{ history.value }}</q-item-label>
            <q-item-label caption lines="2">{{
              $moment(history.created_at).calendar()
            }}</q-item-label></q-item-section
          >
          <q-item-section side
            ><q-btn
              flat
              round
              dense
              color="negative"
              icon="mdi-close"
              @click.stop="ActionRemoveHistory(history)"
          /></q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script>
export default {
  watch: {
    histories: {
      deep: true,
      handler(val) {
        localStorage.setItem("youcod3rs_histories", JSON.stringify(val));
      },
    },
  },
};
</script>

<style>
</style>