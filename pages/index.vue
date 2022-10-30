<template>
  <div>
    <h1>aaaa</h1>
    <img style="width: 100px; height: auto;" v-for="(item, idx) of list" :key="idx" :src="item.download_url">
  </div>
</template>

<script setup>
import { LIST } from "~/store/test/constants";
const { $store: { dispatch, getters } } = useNuxtApp();

dispatch(`test/${LIST}`);
const list = computed(() => getters[`test/${LIST}`]);
</script>
