<template>
  <v-app>
    {{ env.VITE_APP_TITLE }}
    <v-btn @click="click">test</v-btn>
    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import { PersistentLruCache, PresitentType } from "@pkg/lru-cache";
import { isEven as liveIsEven } from "@lib/live-even";
import { isEven as pkgIsEven } from "@pkg/is-even";

import { MockService, MockAPIMode } from "@pkg/mock-service";

import { ref } from "vue";
import { PetApi, PetStatusEnum } from "@pkg/pet-store-api";

// //===generated api===
const petAPI = new PetApi();
const click = () => {
  petAPI.findPetsByStatus([PetStatusEnum.Sold]).then(res => {
    console.log("findPetsByStatus : ", res);
  });
};
// //===generated api===

let mockService = new MockService();
mockService
  .getMockAxiosResponse(MockAPIMode.FAST)
  .then(r => console.log("use MockService", r));

let persistentLruCache = new PersistentLruCache(PresitentType.Local, {
  max: 30
});
persistentLruCache.setStorage("key", { age: 1 }); // 저장
console.log("캐싱 여부", persistentLruCache.isHit("key"));
console.log("캐싱 데이터 가져오기", persistentLruCache.getStorage("key"));
console.log("캐싱 데이터 삭제", persistentLruCache.delStorage("key"));
// persistentLruCache.clearCaches(); // 초기화

console.log("pkg isEven", pkgIsEven(3));
console.log("live isEven", liveIsEven(3));

const env = ref(import.meta.env);
</script>
