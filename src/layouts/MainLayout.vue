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
            :href="`${urlServer}/auth/google`"
          />
          <account-menu />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      show-if-above
      content-class="bg-white text-dark"
      :mini="miniState"
      :width="256"
      :breakpoint="512"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
    >
      <q-list>
        <q-card v-if="user && !miniState" class="text-center" flat>
          <q-card-section>
            <q-avatar size="96px" font-size="96px" text-color="grey-5">
              <img :src="user.picture" v-if="user.picture" />
              <q-icon name="mdi-account-circle" v-else />
            </q-avatar>
          </q-card-section>
          <q-card-section>
            <div class="text-h6">{{ user.name }}</div>
          </q-card-section>
        </q-card>
        <q-item clickable to="/home">
          <q-item-section side>
            <q-icon name="mdi-home-variant-outline" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Início</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          tag="a"
          target="_blank"
          href="https://studio.youtube.com/"
        >
          <q-item-section side>
            <q-icon name="mdi-television-play" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Videos</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          tag="a"
          target="_blank"
          href="https://studio.youtube.com/"
        >
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
import AccountMenu from "../components/AccountMenu.vue";
import HistoryController from "../components/HistoryController.vue";
export default {
  components: { HistoryController, AccountMenu },
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
