<template>
  <v-app>
    {{ env.VITE_APP_TITLE }}
    <v-btn @click="click">test</v-btn>
    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";

import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "app",
  components: { HelloWorld },
  setup() {
    const env = ref(import.meta.env);
    return {
      env
    };
  },
  created() {
    console.log("create");
  },
  methods: {
    click() {
      console.log("click");
    }
  }
});
</script>
