import { atom } from "recoil";

const categoryNaviState = atom({
  key: "categoryNaviState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

const countState = atom({
  key: "countState",
  default: 0,
});

export { categoryNaviState, countState };
