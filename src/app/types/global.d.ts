declare module '*.scss' {
  interface IClassNames {
    [className: string]: string
  }
  const className: IClassNames;
  export =  className
}

declare module '*.png';
declare module '*.jpeg';
declare module '*.jpg';
declare module '*.svg' {
  import { VFC, SVGProps } from 'react';
  const SVG: VFC<SVGProps<SVGSVGElement>>;
  export default SVG;
}
