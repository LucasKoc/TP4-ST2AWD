<script lang="ts">
import { defineComponent } from 'vue';
import BaseButton from "@/components/BaseButton.vue";

export default defineComponent({
  name: "AsyncButton",
  components: {
    BaseButton,
  },
  inheritAttrs: false,

  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "primary",
      validator: (value: string): boolean => {
        return ["primary", "warn", "danger"].includes(value);
      },
    },
  },

  data () {
    return {
      isPending: false
    }
  },

  methods: {
    handleClick() {
      const originalOnClick = this.$attrs.onClick as unknown as () => Promise<void>;
      this.isPending = true;
      originalOnClick().finally(() => {
        this.isPending = false;
      });
    }
  }
});
</script>

<template>
    <base-button :disabled="disabled || isPending" @click.stop.prevent="handleClick" :color="color"> <slot/>
      <font-awesome-icon class="icon" v-if="isPending" :icon="['fas', 'circle-notch']" :style="{color: 'white'}" pulse/>
    </base-button>
</template>

<style scoped>
.icon {
  margin-right: 0.5em;
}
</style>
