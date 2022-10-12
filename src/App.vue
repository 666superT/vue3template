<template>
  <el-config-provider :size="configProvoder.size">
    <router-view />
    <div>{{ env }}</div>
  </el-config-provider>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const env = import.meta.env.VITE_API_URL;

const configProvoder = reactive({
  size: "small",
});
</script>

<style scoped></style>
