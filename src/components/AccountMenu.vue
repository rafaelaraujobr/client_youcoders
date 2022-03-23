<template>
  <q-btn round flat dense v-if="user">
    <q-avatar v-if="user.picture" text-color="grey-5" size="1.8rem">
      <img :src="user.picture" />
    </q-avatar>
    <q-avatar v-else color="primary" text-color="white" size="1.8rem">
      {{ getInitialName(user.name) }}
    </q-avatar>
    <q-menu transition-show="jump-down" transition-hide="jump-up">
      <q-card flat style="min-width: 248px" :bordered="$q.dark.isActive">
        <q-card-section class="text-center">
          <q-avatar size="96px" font-size="96px" text-color="grey-5">
            <img :src="user.picture" v-if="user.picture" />
            <q-icon name="mdi-account-circle" v-else />
          </q-avatar>
          <div class="text-h6">{{ user.name }}</div>
        </q-card-section>
        <q-separator />
        <q-card-section class="q-pa-none">
          <q-list>
            <q-item clickable v-close-popup @click="setModeDark">
              <q-item-section avatar>
                <q-icon name="mdi-theme-light-dark" />
              </q-item-section>
              <q-item-section v-if="!$q.dark.isActive">Dark </q-item-section>
              <q-item-section v-else>Light</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup @click="logout">
              <q-item-section avatar>
                <q-icon color="negative" name="mdi-power" />
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-weight-medium"> Sair </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
    </q-menu>
  </q-btn>
</template>

<script>
export default {
  name: "AccountMenu",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
</style>
