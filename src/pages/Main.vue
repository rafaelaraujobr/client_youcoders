<template>
  <q-page padding>{{ user }} </q-page>
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
    localStorage.setItem("youcoders_token", this.tokenGoogle);
    this.ActionSetUser(JSON.parse(this.profile));
  },
};
</script>
