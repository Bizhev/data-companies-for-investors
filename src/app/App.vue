<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/company">Login</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
@import 'index.css';
</style>
