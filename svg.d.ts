// svg.d.ts
declare module '*.svg' {
  import * as React from 'react';
  // SVGR will turn your SVG into a React component
  const Component: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default Component;
}