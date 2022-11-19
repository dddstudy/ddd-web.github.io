import { defineStore } from "pinia";
import axios from "axios";

export const useMockStore = defineStore("mocks", {
  id: "mocks",
  state: () => ({
    mocks: [],
    loading: false,
    error: null,
  }),
  getters: {
    getMocks(state) {
      return state.mocks;
    },
  },
  actions: {
    async fetchMocks() {
      this.loading = true;
      const { data } = await axios.get("https://picsum.photos/v2/list");
      this.mocks = data;
    },
  },
});
