import { LIST } from "./constants";


export default {
  [LIST] (state, payload) {
    state[LIST] = payload;
  }
}