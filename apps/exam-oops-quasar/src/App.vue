<template>
  <router-view />
</template>

<script lang="ts">
import { Meta } from "quasar";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const meta = ref<Meta>({
      totalCount: 1200
    });
    return { meta };
  }
});
</script>
