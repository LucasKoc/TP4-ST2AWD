<script lang="ts">
import BaseButton from "@/components/BaseButton.vue";
import AsyncButton from "@/components/AsyncButton.vue";
import { defineComponent } from 'vue';

export default defineComponent({
  name: "HomePage",
  components: {
    AsyncButton,
    BaseButton,
  },

  methods: {
    clickCounter () {
      this.clickCount++;
      console.log("Clicked " + this.clickCount + " times");
    },

    handleAsyncClick(): Promise<void> {
      this.clickCounter();
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, this.clickCount * 1000);
      });
    },
  },

  data(): { clickCount: number } {
    return {
      clickCount: 0,
    };
  }
});
</script>

<template>
  <div class="main">
    <div>
      <p>Here is the content of the HomePage</p>
    </div>

    <div>
      <base-button role="button" color="primary">BaseButton</base-button>
      <base-button role="button" :disabled="true">BaseButton Disabled</base-button>
      <base-button role="button" color="warn">BaseButton with color props</base-button>
      <base-button role="button" color="danger">BaseButton with color props</base-button>

      <!-- If we want to affect counter from other components: -->
      <!-- BaseButton version
      <base-button role="button" color="primary" @click="clickCounter">BaseButton</base-button>
      <base-button role="button" :disabled="true" @click="clickCounter">BaseButton Disabled</base-button>
      <base-button role="button" color="warn" @click="clickCounter">BaseButton with color props</base-button>
      <base-button role="button" color="danger" @click="clickCounter">BaseButton with color props</base-button>
      -->

      <!-- AsyncButton version
      <async-button role="button" color="primary" @click="handleAsyncClick">BaseButton</async-button>
      <async-button role="button" :disabled="true" @click="handleAsyncClick">BaseButton Disabled</async-button>
      <async-button role="button" color="warn" @click="handleAsyncClick">BaseButton with color props</async-button>
      <async-button role="button" color="danger" @click="handleAsyncClick">BaseButton with color props</async-button>
      -->

      <async-button color="primary" @click="handleAsyncClick">Click Me (Disabled for 1s/click)</async-button>

      <p>Clicked {{ clickCount }} times</p>
    </div>
  </div>
</template>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}

div.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>