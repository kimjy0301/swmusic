import { atom } from "recoil";

const categoryNaviState = atom({
  key: "categoryNaviState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

const countState = atom({
  key: "countState",
  default: 0,
});

const isLoadingState = atom({
  key: "isLoadingState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export { categoryNaviState, countState, isLoadingState };
