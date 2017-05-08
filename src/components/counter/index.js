import React from 'react';
import { observer } from 'mobx-react';

const Counter = observer(function Counter({ store }) {

  function handleInc() {
    store.increment();
  }

  function handleDec() {
    store.decrement();
  }

  return (
    <div className="counter">
      <h3>Counter: {store.count}</h3>
      <button onClick={handleInc}>+</button>
      <button onClick={handleDec}>-</button>
    </div>
  );
});

export default Counter;
