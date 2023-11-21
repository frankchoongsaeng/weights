export interface WeightData {
  name: string;
  date: string;
  time?: string;
  weight: number;
  id: string;
}

import weightData from "./weights.json";

import { createClient } from "@vercel/kv";

const kv = createClient({
  url: "https://cool-ray-40244.kv.vercel-storage.com",
  token:
    "AZ00ASQgZGY3MzE3NTQtMWE5MS00NzI4LWEyZTgtNDdmZjg0OWE4ODgzNzg0ODRjMTgzYTMzNDEyNmJhOGY1NDg3NzhiODc5ZWM=",
});

export async function saveData(data: WeightData): boolean {
  console.log(data);
  try {
    await kv.set(data.id, data);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function getWeightData(): Promise<WeightData[]> {
  return Promise.resolve(weightData);
}
