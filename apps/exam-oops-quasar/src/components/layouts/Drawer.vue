<template>
  <q-drawer v-model="mainStore.leftDrawerOpen" show-if-above bordered>
    <q-list bordered class="rounded-borders">
      <q-item-label header> Essential Links </q-item-label>
      <q-expansion-item
        expand-icon="none"
        expand-separator
        :content-inset-level="0.5"
        icon="receipt"
        label="Routing Rules"
      >
      </q-expansion-item>
      <q-expansion-item
        :content-inset-level="0.5"
        expand-separator
        icon="mail"
        label="Monitoring"
        default-opened
      >
        <q-expansion-item
          expand-icon="none"
          :content-inset-level="0.5"
          icon="receipt"
          label="Rule/Transaction"
        >
        </q-expansion-item>
      </q-expansion-item>
    </q-list>
  </q-drawer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMainStore } from "stores/main/MainStore";

export default defineComponent({
  name: "MainDrawer",
  components: {},
  setup() {
    const mainStore = useMainStore();
    return { mainStore };
  },
  computed: {}
});
</script>
