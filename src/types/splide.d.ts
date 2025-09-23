declare module '@splidejs/react-splide' {
  import * as React from 'react';

  export interface SplideProps extends React.HTMLAttributes<HTMLDivElement> {
    options?: Record<string, unknown>;
    hasTrack?: boolean;
  }
  export const Splide: React.FC<SplideProps>;

  export type SplideSlideProps = React.LiHTMLAttributes<HTMLLIElement>;
  export const SplideSlide: React.FC<SplideSlideProps>;

  const _default: unknown;
  export default _default;
}


