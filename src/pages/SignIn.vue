<template>
  <q-page class="flex flex-center">
    <q-card flat bordered>
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>
      <q-card-section>
        <q-input v-model="user" type="text" label="Usuario" />
        <q-input v-model="password" type="passwords" label="Senha" />
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script>
export default {
  name: "SignInPage",
  data() {
    return {
      user: "",
      password: "",
    };
  },
};
</script>

