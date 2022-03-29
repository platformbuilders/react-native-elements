import { DefaultTheme } from 'styled-components';

import { Animations } from './Animations';
import { BorderRadius } from './BorderRadius';
import { BorderWidth } from './BorderWidth';
import { Colors } from './Colors';
import { Opacity } from './Opacity';
import { Spacing } from './Spacing';
import { TypographyTheme } from './Typography';

export interface ThemeType extends Colors, Animations {
  spacing: Spacing;
  borderRadius: BorderRadius;
  borderWidth: BorderWidth;
  opacity: Opacity;
  typography: TypographyTheme;
}

export type ThemeProps = {
  theme: DefaultTheme;
};

// export type ThemeType = Colors &
//   BorderWidth &
//   Animations &
//   TypographyTheme & { spacing: Spacings } & {
//     radius: Radius;
//   };
