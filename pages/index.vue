<template>
  <div>
    <h1>DDD 공식 홈페이지 프로젝트</h1>
    <div class="main">
      <p v-if="loading">Loading posts...</p>
      <p v-if="error">{{ error.message }}</p>
      <ul class="main__list">
        <li
          v-for="(mock, idx) in mocks"
          :key="mock.id"
          class="main__list--item"
        >
          <p>{{ mock.author }}</p>
          <img
            :class="`main__img main__img--${idx}`"
            :src="mock.download_url"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useMockStore } from "~/store/piniaTest/mock";
import { storeToRefs } from "pinia";

const { mocks, loading, error } = storeToRefs(useMockStore());
const { fetchMocks } = useMockStore();

fetchMocks();
</script>
<style lang="scss">
.main {
  display: flex;
  justify-content: center;
  &__list {
    color: gray;
    &--item {
      margin: 0 auto;
    }
  }
}
</style>
