<template>
  <div>
    <base-layout>
      <home-page />
    </base-layout>
  </div>
</template>

<script lang="ts">
import BaseLayout from "@/layouts/BaseLayout.vue";
import HomePage from "@/pages/HomePage.vue";

export default {
  name: "App",
  components: {
    BaseLayout,
    HomePage,
  },
};
</script>

<style>

</style>