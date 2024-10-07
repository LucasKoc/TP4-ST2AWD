<template>
  <div>
    <base-layout>
      <home-page />
    </base-layout>
  </div>
</template>

<script>
import HomePage from './pages/HomePage.vue'
import BaseLayout from './layouts/BaseLayout.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    BaseLayout
  }
}
</script>

<style>

</style>