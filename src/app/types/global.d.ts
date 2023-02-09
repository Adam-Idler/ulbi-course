declare module '*.scss' {
  type IClassNames = Record<string, string>
  const className: IClassNames;
  export = className
}

declare module '*.png';
declare module '*.jpeg';
declare module '*.jpg';
declare module '*.svg' {
  import { type VFC, type SVGProps } from 'react';
  const SVG: VFC<SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare const IS_DEV: boolean;
