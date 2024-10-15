<script lang="ts">
import { defineComponent } from 'vue';
import BaseHeader from "@/components/BaseHeader.vue";
import BaseFooter from "@/components/BaseFooter.vue";

export default defineComponent ({
  name: "BaseLayout",
  components: {
    BaseHeader,
    BaseFooter,
  },
  props: {
    user: {
      type: Object,
      required: false,
    },
  },
  methods: {
    handleUserChanged(newUser: Object) {
      this.$emit('userChanged', newUser);
    },
  },
});
</script>

<template>
  <div>
    <base-header :user="user" @userChanged="handleUserChanged"/>
    <slot></slot>
    <base-footer />
  </div>
</template>

<style scoped>

</style>
