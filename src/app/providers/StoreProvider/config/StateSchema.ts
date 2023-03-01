import { type LoginSchema } from 'features/AuthByUsername';
import { type CounterSchema } from 'entities/Counter';
import { type UserSchema } from 'entities/User';
import { type CombinedState, type AnyAction, type EnhancedStore, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit';
import { type ProfileSchema } from 'entities/Profile';

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema

  // Ассинхронные редюсеры
  loginForm?: LoginSchema
  profile?: ProfileSchema
}

export type StateSchemaKey = keyof StateSchema;

export interface ReduxStoreManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}
