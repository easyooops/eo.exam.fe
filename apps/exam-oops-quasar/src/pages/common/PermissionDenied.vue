<template>
  <div class="mem-home-view">
    <h1>권한없음</h1>
    <q-btn to="/" color="white" text-color="black" label="홈으로" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  components: {},
  name: "PermissionDenied",
  props: {
    msg: String
  }
});
</script>
<style lang="scss" scoped></style>
