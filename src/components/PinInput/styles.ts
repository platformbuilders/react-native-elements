import { moderateScale } from 'react-native-size-matters';
import styled from 'styled-components/native';
import { getTheme, ifStyle } from '../../utils/helpers';
import DefaultIcon from '../Icon';
import Typography from '../Typography';
import DefaultCodeInput from './lib';

const hasError = ifStyle('error');
const isContrast = ifStyle('contrast');
const isCentered = ifStyle('centered');
const danger = getTheme('danger');
const brandPrimary = getTheme('brand.primary.main');
const textColor = getTheme('text.dark');
const brandContrast = getTheme('brand.primary.contrast');
const mediumSpacing = getTheme('spacing.md');

type WrapperProps = {
  style: any;
};

export const defaultStyling = (theme?: any): any => ({
  cellStyle: {
    borderRadius: 8,
    borderColor: theme ? textColor(theme) : 'black',
    borderWidth: 2,
  },
  cellStyleFocused: {
    borderColor: theme ? brandPrimary(theme) : '#eeeeee',
  },
  textStyle: {
    fontSize: moderateScale(26),
    color: theme ? textColor(theme) : 'black',
  },
});

export const Wrapper = styled.View<WrapperProps>`
  align-items: center;
  flex-direction: row;
`;

export const PinCodeInput = styled(DefaultCodeInput)``;

export const Icon = styled(DefaultIcon).attrs((props: any) => ({
  color: hasError(
    danger(props),
    isContrast(brandContrast(props), brandPrimary(props))(props),
  )(props),
}))<any>`
  margin-left: ${mediumSpacing}px;
`;

type CaptionProps = {
  centered: boolean;
};

export const CaptionText = styled(Typography).attrs({
  variant: 'xs',
})<CaptionProps>`
  text-align: ${isCentered('center', 'left')};
  opacity: 0.67;
  font-weight: 300;
`;
