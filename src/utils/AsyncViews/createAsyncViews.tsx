import { lazy } from 'react';

export const createAsyncView = (componentName: string) => {
  return lazy(() => {
    return import(`../../views/${componentName}`);
  });
};
