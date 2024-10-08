<script lang="ts">
import { defineComponent } from 'vue';
import { signInAndGetUser } from '@/lib/microsoftGraph';
import { AccountInfo } from '@azure/msal-browser';
import BaseButton from "@/components/BaseButton.vue";

export default defineComponent({
  name: 'SigninButton',
  components: {
    BaseButton
  },
  data() {
    return {
      user: null as AccountInfo | null,
    };
  },
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
    icon: {
      type: String,
      default: "",
    }
  },
  methods: {
    async handleSignIn() {
      try {
        this.user = await signInAndGetUser();
      } catch (error) {
        console.error("Error during sign-in:", error);
      }
    },
  },
});
</script>

<template>
    <base-button role="button" :color="color" @click="handleSignIn" :disabled="disabled" :icon="icon">{{ user ? "Signed as " + user.username : "Sign in" }}</base-button>
</template>

<style scoped>

</style>