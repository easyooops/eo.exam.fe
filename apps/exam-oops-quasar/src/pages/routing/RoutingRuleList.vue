<template>
  <q-page class="row items-center justify-evenly">
    <h2>RoutingRuleList</h2>
    {{ buildMode }}
    <!-- <p v-for="n in 35" :key="n">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium
      molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates
      asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
    </p> -->
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { PersistentLruCache, PresitentType } from "@pkg/lru-cache";

export default defineComponent({
  name: "RoutingRuleList",

  setup() {
    const buildMode = ref<string>(process.env.VUE_APP_MODE);
    let persistentLruCache = new PersistentLruCache(PresitentType.Local, {
      max: 30
    });
    persistentLruCache.setStorage("key", { age: 1 }); // 저장
    persistentLruCache.isHit("key"); // 캐싱여부 // true
    persistentLruCache.getStorage("key"); // 가져오기 // 1
    console.log("lru-Check", persistentLruCache.getStorage("key"));
    persistentLruCache.delStorage("key"); // 삭제
    persistentLruCache.clearCaches(); // 초기화

    return { buildMode };
  }
});
</script>
