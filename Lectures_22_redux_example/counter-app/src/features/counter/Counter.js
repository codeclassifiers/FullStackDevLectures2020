import React, { useState } from "react";

// Step 1: Import useSelector hook from "react-redux" package
// Step 1 for updating values: Import useDispatch hook from "react-redux" package
import { useSelector, useDispatch } from "react-redux";

// Update values from reducer
// Import actions from slice
import { decrement, increment } from "./counterSlice";
import styles from "./Counter.module.css";

export function Counter() {
  // Step 2: Write variable name and get the value of initialState variable from
  // useSelector hook
  const count = useSelector((state) => state.counter.value);
  const secondaryCounter = useSelector(
    (state) => state.counter.secondaryCounter
  );
  const name = useSelector((state) => state.counter.name);
  const lastName = useSelector((state) => state.counter.lastName);
  const characterObject = useSelector((state) => state.character);
  const counterObject = useSelector((state) => state.counter);
  console.log("count", count, secondaryCounter, name, lastName);
  console.log("counter object", counterObject);
  // Step 2 for updating store values: write dispatch variable
  const dispatch = useDispatch();
  // return (
  //   <div>
  //     <h1>
  //       Character name in counter component: {characterObject.characterName}
  //     </h1>
  //   </div>
  // );
  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
