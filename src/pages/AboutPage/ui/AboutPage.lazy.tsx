import { lazy } from 'react';

export const AboutPageLazy = lazy(
  async () =>
    await new Promise(
      // @ts-expect-error: Сделано для практики, так делать нельзя
      resolve => setTimeout(() => { resolve(import('./AboutPage')); }, 1500)
    )
);
