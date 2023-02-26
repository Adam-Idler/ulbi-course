import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUsername';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { type StateSchema } from './StateSchema';

export function createReduxStore (initialState?: StateSchema) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer
  };

  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: IS_DEV,
    preloadedState: initialState
  });
}
