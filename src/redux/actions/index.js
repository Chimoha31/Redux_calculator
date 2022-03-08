import {
  INPUT_NUMBER,
  PLUS,
  MINUS,
  MULTIPLY,
  DEVIDE,
  EQUAL,
  CLEAR,
} from "./types";

export const onClickNumber = (number) => ({
  type: INPUT_NUMBER,
  number, //number: number,の省略形(keyとpayloadが同じの場合は省略できる)
});

export const onClickPlus = () => ({
  type: PLUS,
});
export const onClickMinus = () => ({
  type: MINUS,
});
export const onClickMultoply = () => ({
  type: MULTIPLY,
});
export const onClickDevide = () => ({
  type: DEVIDE,
});

export const onClickEqual = () => ({
  type: EQUAL,
});
export const onClickClear = () => ({
  type: CLEAR,
});

// actionの定義が終わったらreducerの定義
// 実際にどのように状態を更新して欲しいかをreducerに定義していく
