<template>
  <q-page padding>
    {{ this.token }}
  </q-page>
</template>

<script>
export default {
  props: {
    tokenGoogle: {
      type: String,
    },
  },
  name: "MainPage",
  watch: {
    token() {
      this.ActionSetToken(this.tokenGoogle);
    },
  },
  created() {
    this.getSearch(this.search);
  },
};
</script>
