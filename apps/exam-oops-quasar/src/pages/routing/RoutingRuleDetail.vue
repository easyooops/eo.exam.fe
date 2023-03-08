<script setup lang="ts">
import { Background, Controls, MiniMap } from "@vue-flow/additional-components";
import { VueFlow, useVueFlow } from "@vue-flow/core";
import { ref } from "vue";
import { initialElements } from "./initial-elements";
import "@vue-flow/core/dist/style.css";
import "@vue-flow/core/dist/theme-default.css";
import { presets } from "./presets";
import { Element } from "@vue-flow/core";

const { onConnect, addEdges } = useVueFlow();
const elements = ref(initialElements);

onConnect(params => addEdges([params]));

const bgColor = ref(presets.ayame);
const nodeColor = (n: Element) => {
  if (n.type === "custom") return bgColor.value;
  return presets.torinoko; //default
};
</script>

<template>
  <q-page>
    <div class="vue-flow-container">
      <VueFlow
        v-model="elements"
        :default-edge-options="{ type: 'smoothstep' }"
        :default-zoom="1.5"
        :min-zoom="0.2"
        :max-zoom="4"
        fit-view-on-init
      >
        <Background pattern-color="#aaa" :gap="10" />
        <MiniMap :node-color="nodeColor" />
        <Controls />
      </VueFlow>
    </div>
  </q-page>
</template>

<style>
.vue-flow-container {
  height: calc(100vh - 100px);
}
.vue-flow__minimap {
  transform: scale(90%);
  transform-origin: bottom right;
}
.vue-flow__controls {
  transform-origin: top right;
}
</style>
