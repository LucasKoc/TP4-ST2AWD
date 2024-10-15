<template>
  <div>
    <base-layout :user="user" @userChanged="handleUserChanged" >
      <home-page :user="user"/>
    </base-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseLayout from "@/layouts/BaseLayout.vue";
import HomePage from "@/pages/HomePage.vue";

export default defineComponent({
  name: "App",
  components: {
    BaseLayout,
    HomePage,
  },
  data() {
    return {
      user: null as Object | null,
    };
  },
  methods: {
    handleUserChanged(newUser: Object) {
      this.user = newUser;
    },
  },
});
</script>

<style>

</style>