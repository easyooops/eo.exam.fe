<template>
  <q-page class="row items-center justify-evenly">
    <h2>ProjectDetail</h2>
  </q-page>
</template>

<script lang="ts">
import { Meta } from "components/models";

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ProjectDetail",

  setup() {
    const meta = ref<Meta>({
      totalCount: 1200
    });
    return { meta };
  }
});
</script>
