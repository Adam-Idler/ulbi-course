import type { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui';
import { getCounterValue } from '../model/selectors';
import { counterActions } from '../model/slice/counterSlice';

export const Counter: FC = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button data-testid="increment-btn" onClick={increment}>
        +
      </Button>
      <Button data-testid="decrement-btn" onClick={decrement}>
        -
      </Button>
    </div>
  );
};
