<template>
  <q-page padding>{{ JSON.parse(this.profile) }} </q-page>
</template>

<script>
export default {
  props: {
    tokenGoogle: {
      type: String,
    },
    profile: {
      type: String,
    },
  },
  name: "MainPage",
  created() {
    this.ActionSetToken(this.tokenGoogle);
    this.ActionSetUser(JSON.parse(this.profile));
  },
};
</script>
