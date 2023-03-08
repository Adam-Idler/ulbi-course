import { type LoginSchema } from 'features/AuthByUsername';
import { type UserSchema } from 'entities/User';
import { type CombinedState, type AnyAction, type EnhancedStore, type Reducer, type ReducersMapObject, type Dispatch } from '@reduxjs/toolkit';
import { type ProfileSchema } from 'entities/Profile';
import { type AxiosInstance } from 'axios';
import { type To, type NavigateOptions } from 'react-router-dom';

export interface StateSchema {
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

export interface ThunkExtraArg {
  api: AxiosInstance
  navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArg
  dispatch?: Dispatch
  state: StateSchema
}
