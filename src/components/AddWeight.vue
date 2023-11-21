<script setup lang="ts">
import { WeightData, saveData } from "../services/dataservice";
import { v4 } from "uuid";

function save(e: Event) {
  const event = e as SubmitEvent;
  const formData = new FormData(event.target as HTMLFormElement);

  if (!formData.get("name")) alert("missing name");
  else if (!formData.get("weight")) alert("missing weight");
  else if (!formData.get("date")) alert("missing date");
  else if (!formData.get("time")) alert("missing time");
  else {
    const weightData = {
      id: v4(),
      name: formData.get("name"),
      weight: Number(formData.get("weight")),
      date: formData.get("date"),
      time: formData.get("time"),
    };
    saveData(weightData as unknown as WeightData);
  }
}
</script>

<template>
  <form action="" @submit.prevent="save">
    <div>
      <label>
        Name:
        <input type="text" name="name" id="name" />
      </label>
    </div>
    <div>
      <label>
        Weight:
        <input type="number" name="weight" id="weight" />
      </label>
    </div>
    <div>
      <label>
        Weight:
        <input type="date" name="date" id="date" />
      </label>
    </div>
    <div>
      <label>
        Weight:
        <input type="time" name="time" id="time" />
      </label>
    </div>
    <div><input type="submit" value="Add" /></div>
  </form>
</template>

<style scoped></style>
