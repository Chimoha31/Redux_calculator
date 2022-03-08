import {
  INPUT_NUMBER,
  PLUS,
  MINUS,
  MULTIPLY,
  DEVIDE,
  EQUAL,
  CLEAR,
} from "../actions/types";

const initialAppState = {
  inputValue: 0,
  oparator: "", //+-×÷演算子が入るところ
  resultValue: 0,
  calculate: false, //計算を行うかの判断。初期値を0にしておくことで（例：0-8-4）、自動で0スタートの計算式になることを防ぐ。true=-12, false=4
  showingResult: false,
};

const calculator = (state = initialAppState, action) => {
  switch (action.type) {
    case INPUT_NUMBER:
      return {
        ...state,
        inputValue: state.inputValue * 10 + action.INPUT_NUMBER,
        showingResult: false,
      };

    case PLUS: 
    if(state.calculate === true) {
      return {
        ...state,
        inputValue: 0,
        operator: '+',
        resultValue: state.resultValue + state.inputValue,
        showingResult: true,
      };
    }else{
      return{
        ...state,
        inputValue: 0,
        operator: '+',
        calculate: true,
        resultValue: state.inputValue,
        showingResult: true,
      }
    }
  }
};
