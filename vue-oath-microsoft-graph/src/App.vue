<template>
  <div>
    <base-layout>
      <home-page/>
    </base-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import BaseLayout from "@/layouts/BaseLayout.vue";
import HomePage from "@/pages/HomePage.vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "App",
  components: {
    BaseLayout,
    HomePage,
  },
  setup() {
    const store = useStore();
    const user = computed(() => store.state.user);

    return {
      user,
    };
  },
});
</script>

<style>

</style>