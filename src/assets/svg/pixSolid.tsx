import React, { FC } from 'react';
import Svg, { G, Path } from 'react-native-svg';

import type { SvgProps } from '../../types';

const PixSolid: FC<SvgProps> = ({
  color = '#16254A',
  width = 24,
  height = 24,
}) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <G opacity="0.5">
      <Path
        d="M5.28602 18.3578C6.22156 18.3578 7.11392 17.9982 7.776 17.3221L11.3742 13.726C11.6333 13.4671 12.0651 13.4671 12.3242 13.726L15.9368 17.3365C16.5989 17.9982 17.4912 18.3722 18.4267 18.3722H19.132L14.5695 22.932C13.1446 24.356 10.8417 24.356 9.41679 22.932L4.83984 18.3578H5.28602Z"
        fill={color}
      />
      <Path
        d="M18.426 5.62785C17.4905 5.62785 16.5981 5.98746 15.9361 6.66352L12.3234 10.274C12.0644 10.5329 11.6326 10.5329 11.3735 10.274L7.77528 6.6779C7.1132 6.01623 6.22084 5.64224 5.2853 5.64224H4.85352L9.43047 1.06803C10.8554 -0.356011 13.1582 -0.356011 14.5831 1.06803L19.1457 5.62785H18.426Z"
        fill={color}
      />
      <Path
        d="M1.06867 9.4254L3.78893 6.70677H5.2858C5.93348 6.70677 6.56677 6.96568 7.02734 7.42598L10.6256 11.0221C10.9566 11.3529 11.4028 11.5255 11.849 11.5255C12.2951 11.5255 12.7269 11.3529 13.0724 11.0221L16.685 7.4116C17.1456 6.9513 17.7788 6.69238 18.4265 6.69238H20.1969L22.9315 9.4254C24.3564 10.8494 24.3564 13.1509 22.9315 14.575L20.1969 17.308H18.4265C17.7788 17.308 17.1456 17.0491 16.685 16.5888L13.0724 12.9783C12.4247 12.331 11.2876 12.331 10.6256 12.9783L7.02734 16.5744C6.56677 17.0347 5.93348 17.2936 5.2858 17.2936H3.78893L1.06867 14.575C-0.356225 13.1509 -0.356225 10.8494 1.06867 9.4254Z"
        fill={color}
      />
    </G>
  </Svg>
);

export default PixSolid;
