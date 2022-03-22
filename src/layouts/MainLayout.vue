<template>
  <q-layout view="hHh Lpr lFf">
    <q-header bordered class="text-dark bg-white">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />
        <q-btn
          flat
          dense
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          no-caps
          class="text-subtitle1"
          label="youcoders"
        /><q-space />
        <q-toolbar-title>
          <q-input
            v-model="searchSelect"
            type="search"
            placeholder="Buscar..."
            dense
            filled
            @keyup.enter="getSearch(searchSelect)"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </q-toolbar-title>
        <div class="q-gutter-sm q-mr-xl">
          <history-controller />
          <q-btn
            v-if="user"
            flat
            dense
            round
            @click="leftDrawerOpen = !leftDrawerOpen"
            aria-label="Menu"
            icon="mdi-cloud-upload-outline"
          />
        </div>
        <div class="q-gutter-sm">
          <q-btn
            v-if="!user"
            outline
            dense
            aria-label="Login"
            no-caps
            class="q-px-md"
            label="Entrar"
            href="https://app-youcoders-v1.herokuapp.com/auth/google"
          />
          <q-btn
            v-if="user"
            outline
            dense
            aria-label="Logout"
            no-caps
            class="q-px-md"
            label="Sair"
            @click="logout()"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      show-if-above
      content-class="bg-white text-dark"
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      :width="256"
      :breakpoint="512"
    >
      <q-list>
        <q-item clickable tag="a" target="_blank" href="https://quasar.dev">
          <q-item-section side>
            <q-icon name="mdi-home-variant-outline" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Início</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://quasar.dev">
          <q-item-section side>
            <q-icon name="mdi-television-play" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Videos</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://quasar.dev">
          <q-item-section side>
            <q-icon name="mdi-play-box-multiple-outline" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Canais</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container class="bg-grey-1">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import HistoryController from "../components/HistoryController.vue";
export default {
  components: { HistoryController },
  name: "MainLayout",
  data() {
    return {
      leftDrawerOpen: false,
      miniState: true,
      filter: null,
    };
  },
  computed: {
    searchSelect: {
      get() {
        return this.search;
      },
      set(value) {
        this.ActionSetSearch(value);
      },
    },
  },
};
</script>

<style>
</style>
