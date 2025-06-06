import React from 'react';
import If from '../If';
import { CheckedRadio, Radio } from './styles';

type Props = {
  id?: string;
  accessibility: string;
  radioButtonColor?: string;
  checkedRadioButtonColor?: string;
  size?: number;
  internalSize?: number;
  checked?: boolean;
  onPress?(): void;
  rest?: any;
};

const RadioButton: React.FC<Props> = ({
  id,
  accessibility,
  radioButtonColor,
  checkedRadioButtonColor,
  size = 20,
  internalSize = 10,
  checked = false,
  onPress = () => {},
  rest,
}) => (
  <Radio
    id={id || accessibility}
    accessibility={accessibility}
    onPress={onPress}
    radioButtonColor={radioButtonColor}
    size={size}
    {...(rest as any)}
  >
    <If condition={checked}>
      <CheckedRadio
        checkedRadioButtonColor={checkedRadioButtonColor}
        internalSize={internalSize}
      />
    </If>
  </Radio>
);

export default RadioButton;
