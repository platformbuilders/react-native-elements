import React from 'react';
import { DividerText, Line, OptionsWrapper } from './styles';

type Props = {
  marginTop?: number;
  marginBottom?: number;
  text: string;
};

const LabelDivider: React.FC<Props> = ({ text, marginTop, marginBottom }) => (
  <OptionsWrapper {...({ marginTop, marginBottom } as any)}>
    <Line />
    <DividerText>{text}</DividerText>
    <Line />
  </OptionsWrapper>
);

export default LabelDivider;
