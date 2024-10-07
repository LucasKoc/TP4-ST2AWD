<script>
import HomePage from "@/pages/HomePage.vue";
import BaseButton from "@/components/BaseButton.vue";

export default {
  name: "BaseHeader",
  components: {
    BaseButton
  },
  computed: {
    HomePage() {
      return HomePage
    }
  }
}
</script>

<template>
<div id="header">
  <div class="header-container">
    <div>
        <BaseButton icon="house" role="button" color="primary">Home</BaseButton>
    </div>
  </div>

  <div class="header-container">
    <div>
      <p>Not Logged Yet</p>
    </div>
    <div>
      <font-awesome-icon :icon="['fas', 'user']" :style="{color: 'white'}" />
    </div>
  </div>
</div>
</template>

<style scoped>

#header {
  display: flex;
  justify-content: space-between;
  padding: 1em 2em 1em 2em;
  background-color: var(--vt-c-brand);

  height: 3vh;
}

.header-container {
  display: inline-flex;
}

.header-container div {
  display: flex;
  align-items: center;
  margin: 0 0.5em 0 0.5em;
}

p {
  color: var(--vt-c-white-soft);
}

</style>