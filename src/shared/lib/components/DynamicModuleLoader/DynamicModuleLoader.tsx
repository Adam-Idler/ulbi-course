import { type Reducer } from '@reduxjs/toolkit';
import { type ReduxStoreManager, type StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { type FC, type ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer
}

interface DynamicModuleLoaderProps {
  children?: ReactNode
  reducers: ReducersList
  removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = ({ children, reducers, removeAfterUnmount = true }) => {
  const store = useStore() as ReduxStoreManager;

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as StateSchemaKey, reducer);
    });

    return () => {
      if (removeAfterUnmount) {
        store.reducerManager.remove('loginForm');
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {children}
    </>
  );
};
