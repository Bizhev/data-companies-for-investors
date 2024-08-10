<template>
    <q-card flat bordered class="login">
      <q-card-section>
        <h1 class="text-h2">Authorization</h1>
      </q-card-section>

      <q-card-section class="q-pt-2">
        <q-input  class="q-pt-1" placeholder="login" outlined v-model="login" dense />
        <q-input type="password" placeholder="password" outlined v-model="password" dense />
      </q-card-section>

      <q-separator inset />

      <q-card-section>
          <q-btn label="Login" type="submit" color="primary" @click="submit"/>
      </q-card-section>
    </q-card>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';

const store = useAuthStore();

const login = ref('');
const password = ref('');

const submit = () => {
  store.login(login.value, password.value);
};
</script>
<style lang="less" scoped>
.login {
  margin: 50px auto;
  width: 500px;
}
</style>
