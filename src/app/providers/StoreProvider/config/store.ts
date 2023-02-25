import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from '../../../../entities/counter';
import { userReducer } from '../../../../entities/user';
import { type StateSchema } from './StateSchema';

export function createReduxStore (initialState?: StateSchema) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer
  };

  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: IS_DEV,
    preloadedState: initialState
  });
}
