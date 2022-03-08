import React from "react";
import { connect } from "react-redux";
import {
  onClickNumber,
  onClickPlus,
  onClickMinus,
  onClickMultiply,
  onClickDevide,
  onClickEqual,
  onClickClear,
} from "../redux/actions";
import Button from "./Button";
import Result from "./Result";
import "../../src/App.scss";

function App(props) {
  const {
    calculator,
    onClickNumber,
    onClickPlus,
    onClickMinus,
    onClickMultiply,
    onClickDevide,
    onClickEqual,
    onClickClear,
  } = props;

  return (
    <React.Fragment>
      <div className="result">
        <Result
          result={
            calculator.showingResult
              ? calculator.resultValue
              : calculator.inputValue
          }
        />
      </div>

      <div className="button-wrapper">
        <div className="number">
          <div className="upper">
            <Button text={"7"} onClick={() => onClickNumber(7)} />
            <Button text={"8"} onClick={() => onClickNumber(8)}  />
            <Button text={"9"} onClick={() => onClickNumber(9)}  />
          </div>
          <div className="middle">
            <Button text={"4"} onClick={() => onClickNumber(4)}  />
            <Button text={"5"} onClick={() => onClickNumber(5)}  />
            <Button text={"6"} onClick={() => onClickNumber(6)}  />
          </div>
          <div className="lower">
            <Button text={"1"} onClick={() => onClickNumber(1)}  />
            <Button text={"2"} onClick={() => onClickNumber(2)}  />
            <Button text={"3"} onClick={() => onClickNumber(3)}  />
          </div>
          <div className="bottom">
            <Button text={"0"} onClick={() => onClickNumber(0)} />
            <Button text={"AC"} onClick={() => onClickClear()}  />
            <Button text={"="}  onClick={() => onClickEqual()} />
          </div>
        </div>

        <div className="operator">
          <Button text={"÷"} onClick={() => onClickDevide()} />
          <Button text={"×"} onClick={() => onClickMultiply()}  />
          <Button text={"-"} onClick={() => onClickMinus()}  />
          <Button text={"+"} onClick={() => onClickPlus()}  />
        </div>
      </div>
    </React.Fragment>
  );
}

// reduxのstoreで保持している状態をpropsとしてこのcomponentに渡せるようにしている
const mapStateToProps = (state) => {
  return {
    calculator: state.calculator,
  };
};

export default connect(mapStateToProps, {
  onClickNumber,
  onClickPlus,
  onClickMinus,
  onClickMultiply,
  onClickDevide,
  onClickEqual,
  onClickClear,
})(App);
