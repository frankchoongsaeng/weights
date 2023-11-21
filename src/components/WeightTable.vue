<script setup lang="ts">
import { ref } from "vue";
import { WeightData } from "../services/dataservice";

defineProps<{ weightData: WeightData[] }>();
const unit = ref("kg");

function changeUnit() {
  if (unit.value === "kg") unit.value = "lb";
  else unit.value = "kg";
}
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>
          Weight <span @click="changeUnit">{{ unit }}</span>
        </th>
        <th>Date</th>
        <th>Time</th>
      </tr>
    </thead>
    <tr v-for="weight in weightData" :key="weight.id">
      <td>{{ weight.name }}</td>
      <td>{{ weight.weight }}</td>
      <td>{{ weight.date }}</td>
      <td>{{ weight.time }}</td>
    </tr>
  </table>
</template>

<style scoped></style>
