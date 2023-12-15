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
  <div class="body">
    <AddWeight />
    <WeightTable :weight-data="weightData" />
  </div>
</template>

<style scoped></style>
