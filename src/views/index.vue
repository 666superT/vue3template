<template>
  <div ref="el" class="el">鼠标移动到我这里了</div>
  <el-button type="primary" @click="fn()">按钮</el-button>
</template>

<script lang="ts" setup>
import { useIntervalFn, useMouseInElement, useToggle } from "@vueuse/core";
import { ref, watch } from "vue";
import request from '@/api/request'

const fn = () => {
  let count = 60;
  const timer = useIntervalFn(() => {
    if (count == 0) {
      timer.pause();
    }
    count--;
    console.log(count);
    request.get('/').then(res => {
      console.log(res)
    })
  }, 1000);
};

const el = ref(null);

const { isOutside } = useMouseInElement(el);

watch(isOutside, (n, o) => {
  console.log(n, o);
});
</script>

<style lang="scss" scoped>
.el {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  cursor: pointer;
  border: solid 1px #dddddd;
}
</style>
