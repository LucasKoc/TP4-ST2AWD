<script lang="ts">
import BaseHeader from "@/components/BaseHeader.vue";
import BaseFooter from "@/components/BaseFooter.vue";

export default {
  name: "BaseLayout",
  components: {
    BaseHeader,
    BaseFooter,
  },
};
</script>

<template>
  <div>
    <base-header />
    <slot></slot>
    <base-footer />
  </div>
</template>

<style scoped>

</style>
