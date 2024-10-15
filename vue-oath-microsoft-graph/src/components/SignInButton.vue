<script lang="ts">
import { defineComponent } from 'vue';
import { signInAndGetUser } from '@/lib/microsoftGraph';
import { AccountInfo } from '@azure/msal-browser';
import AsyncButton from "@/components/AsyncButton.vue";

export default defineComponent({
  name: 'SigninButton',
  components: {
    AsyncButton,
  },
  data() {
    return {
      localUser: this.user as AccountInfo | null,
    };
  },
  props: {
    user: {
      type: Object as () => AccountInfo | null,
      default: null,
    },
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
        const newUser = await signInAndGetUser();
        this.localUser = newUser;
        this.$emit('userChanged', newUser);
      } catch (error) {
        console.error('Error during sign-in:', error);
      }
    },
  },
});
</script>

<template>
  <async-button role="button" :color="color" @click="handleSignIn" :disabled="disabled" :icon="icon"> {{ localUser ? "Signed as " + localUser.username : "Sign in" }}</async-button>
</template>

<style scoped>

</style>