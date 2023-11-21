<script setup lang="ts">
import { ref, Ref, onMounted } from "vue";
import WeightTable from "./components/WeightTable.vue";

import { WeightData, getWeightData } from "./services/dataservice";
import AddWeight from "./components/AddWeight.vue";

const weightData: Ref<WeightData[]> = ref([]);

onMounted(async () => {
  weightData.value = await getWeightData();
});
</script>

<template>
  <AddWeight />
  <WeightTable :weight-data="weightData" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
