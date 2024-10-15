<script lang="ts">
import BaseButton from "@/components/BaseButton.vue";
import SignInButton from "@/components/SignInButton.vue";
import { defineComponent } from 'vue';

export default defineComponent ({
  name: "BaseHeader",
  components: {
    BaseButton,
    SignInButton,
  },
});
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
      <SignInButton role="button" color="primary" icon="user">Sign in</SignInButton>
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