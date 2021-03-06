import Animation from 'lottie-react-native';
import { moderateScale } from 'react-native-size-matters';
import styled from 'styled-components/native';
import { AnimationObject, LoadingVariants, ThemeProps } from '../../types';
import { getTheme } from '../../utils/helpers';

export const circularLoading = getTheme('circularLoading');
export const contrastCircularLoading = getTheme('contrastCircularLoading');
export const buttonLoading = getTheme('buttonLoading');
export const contrastButtonLoading = getTheme('contrastButtonLoading');
export const linearLoading = getTheme('linearLoading');
export const contrastLinearLoading = getTheme('contrastLinearLoading');

type IndicatorProps = {
  contrast: boolean;
  variant: LoadingVariants;
  testID: string;
  accessibilityLabel: string;
} & ThemeProps;

const loadingVariant = (
  props: IndicatorProps,
): string | number | AnimationObject | { uri: string } => {
  const { variant, contrast } = props;
  switch (variant) {
    case 'button':
      return contrast ? contrastButtonLoading(props) : buttonLoading(props);
    case 'linear':
      return contrast ? contrastLinearLoading(props) : linearLoading(props);
    default:
      return contrast ? contrastCircularLoading(props) : circularLoading(props);
  }
};

export const smallSize = {
  width: moderateScale(60),
  height: moderateScale(60),
};

export const largeSize = {
  width: moderateScale(120),
  height: moderateScale(120),
};

export const Indicator = styled(Animation).attrs((props: any) => ({
  source: loadingVariant(props),
  autoPlay: true,
  loop: true,
}))<IndicatorProps>``;
