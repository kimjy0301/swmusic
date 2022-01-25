import { atom } from "recoil";

export const categoryNaviState = atom({
  key: "categoryNaviState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
