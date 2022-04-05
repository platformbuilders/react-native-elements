const z1Color = 'rgba(0, 0, 0, 0.1)';
const fontFamilyHeading = '$fontFamilies.heading';
const lineHeightHeading = '$lineHeights.heading';
const letterSpacingDecreased = '$letterSpacing.decreased';
const paragraphSpacingH2 = '$paragraphSpacing.h2';

const theme = {
  spacing: {
    min: {
      value: 1,
      type: 'spacing',
    },
    xxs: {
      value: 2,
      type: 'spacing',
    },
    xs: {
      value: 4,
      type: 'spacing',
    },
    sm: {
      value: 8,
      type: 'spacing',
    },
    md: {
      value: 16,
      type: 'spacing',
    },
    lg: {
      value: 24,
      type: 'spacing',
    },
    xl: {
      value: 32,
      type: 'spacing',
    },
    xxl: {
      value: 48,
      type: 'spacing',
    },
    max: {
      value: 64,
      type: 'spacing',
    },
  },
  sizing: {
    min: {
      value: 1,
      type: 'sizing',
    },
    xxs: {
      value: 2,
      type: 'sizing',
    },
    xs: {
      value: 4,
      type: 'sizing',
    },
    sm: {
      value: 8,
      type: 'sizing',
    },
    md: {
      value: 16,
      type: 'sizing',
    },
    lg: {
      value: 24,
      type: 'sizing',
    },
    xl: {
      value: 32,
      type: 'sizing',
    },
    xxl: {
      value: 48,
      type: 'sizing',
    },
    max: {
      value: 64,
      type: 'sizing',
    },
  },
  borderRadius: {
    min: {
      value: 0,
      type: 'borderRadius',
    },
    xxs: {
      value: 1,
      type: 'borderRadius',
    },
    xs: {
      value: 2,
      type: 'borderRadius',
    },
    sm: {
      value: 4,
      type: 'borderRadius',
    },
    md: {
      value: 6,
      type: 'borderRadius',
    },
    lg: {
      value: 8,
      type: 'borderRadius',
    },
    xl: {
      value: 16,
      type: 'borderRadius',
    },
    xxl: {
      value: 32,
      type: 'borderRadius',
    },
    max: {
      value: 999,
      type: 'borderRadius',
    },
  },
  borderWidth: {
    min: {
      value: 0.5,
      type: 'borderWidth',
    },
    xxs: {
      value: 1,
      type: 'borderWidth',
    },
    xs: {
      value: 1.5,
      type: 'borderWidth',
    },
    sm: {
      value: 2,
      type: 'borderWidth',
    },
    md: {
      value: 3,
      type: 'borderWidth',
    },
    lg: {
      value: 4,
      type: 'borderWidth',
    },
    xl: {
      value: 6,
      type: 'borderWidth',
    },
    xxl: {
      value: 8,
      type: 'borderWidth',
    },
    max: {
      value: 12,
      type: 'borderWidth',
    },
  },
  boxShadow: {
    z0: {
      value: {
        x: 0,
        y: 0,
        spread: 0,
        color: '',
        blur: 0,
      },
      type: 'boxShadow',
    },
    z1: {
      value: {
        x: 0,
        y: 1,
        spread: 0,
        color: z1Color,
        blur: 3,
      },
      type: 'boxShadow',
    },
    z2: {
      value: {
        x: 0,
        y: 4,
        spread: -1,
        color: z1Color,
        blur: 6,
      },
      type: 'boxShadow',
    },
    z3: {
      value: {
        x: 0,
        y: 10,
        spread: -3,
        color: z1Color,
        blur: 15,
      },
      type: 'boxShadow',
    },
    z4: {
      value: {
        x: 0,
        y: 20,
        spread: -5,
        color: z1Color,
        blur: 25,
      },
      type: 'boxShadow',
    },
    z5: {
      value: {
        x: 0,
        y: 25,
        spread: -12,
        color: 'rgba(0, 0, 0, 0.2)',
        blur: 50,
      },
      type: 'boxShadow',
    },
  },
  brand: {
    primary: {
      light: {
        value: '#A2AAF0',
        type: 'color',
      },
      main: {
        value: '#5B6AE7',
        type: 'color',
      },
      dark: {
        value: '#3746B8',
        type: 'color',
      },
      contrast: {
        value: '#ffffff',
        type: 'color',
      },
    },
    secondary: {
      light: {
        value: '#8BD6F8',
        type: 'color',
      },
      main: {
        value: '#42ADEF',
        type: 'color',
      },
      dark: {
        value: '#337BB7',
        type: 'color',
      },
      contrast: {
        value: '#ffffff',
        type: 'color',
      },
    },
    tertiary: {
      light: {
        value: '#BA96F5',
        type: 'color',
      },
      main: {
        value: '#8442EF',
        type: 'color',
      },
      dark: {
        value: '#4A00DC',
        type: 'color',
      },
      contrast: {
        value: '#ffffff',
        type: 'color',
      },
    },
    accent: {
      light: {
        value: '#FBD268',
        type: 'color',
      },
      main: {
        value: '#F49D19',
        type: 'color',
      },
      dark: {
        value: '#A1530A',
        type: 'color',
      },
      contrast: {
        value: '#351B02',
        type: 'color',
      },
    },
  },
  success: {
    light: {
      value: '#F4FCD1',
      type: 'color',
    },
    main: {
      value: '#96C920',
      type: 'color',
    },
    dark: {
      value: '#396006',
      type: 'color',
    },
    contrast: {
      value: '#ffffff',
      type: 'color',
    },
  },
  danger: {
    light: {
      value: '#FFE8D8',
      type: 'color',
      description: 'the 100 shade of a color',
    },
    main: {
      value: '#FF4F3F',
      type: 'color',
    },
    dark: {
      value: '#7A0C27',
      type: 'color',
      description: 'the 900s shade of a color',
    },
    contrast: {
      value: '#ffffff',
      type: 'color',
    },
  },
  warning: {
    light: {
      value: '#FFF8CE',
      type: 'color',
    },
    main: {
      value: '#FFCA0C',
      type: 'color',
    },
    dark: {
      value: '#7A5502',
      type: 'color',
    },
    contrast: {
      value: '#261B00',
      type: 'color',
    },
  },
  info: {
    light: {
      value: '#C2ECEC',
      type: 'color',
    },
    main: {
      value: '#42CCD4',
      type: 'color',
    },
    dark: {
      value: '#186F82',
      type: 'color',
    },
    contrast: {
      value: '#ffffff',
      type: 'color',
    },
  },
  text: {
    main: {
      value: '#eee',
      type: 'color',
    },
    dark: {
      value: '#fff',
      type: 'color',
    },
    light: {
      value: '#ddd',
      type: 'color',
    },
    contrast: {
      value: '#000',
      type: 'color',
    },
  },
  background: {
    z0: {
      value: '#0748A3',
      type: 'color',
    },
    z1: {
      value: '#04317C',
      type: 'color',
    },
    z2: {
      value: '#041E52',
      type: 'color',
    },
    z3: {
      value: '#031740',
      type: 'color',
    },
    z4: {
      value: '#020F28',
      type: 'color',
    },
  },
  opacity: {
    disabled: {
      value: '30%',
      type: 'opacity',
    },
    empty: {
      value: '50%',
      type: 'opacity',
    },
    overlay: {
      value: '80%',
      type: 'opacity',
    },
  },
  fontFamilies: {
    heading: {
      value: 'Roboto',
      type: 'fontFamilies',
    },
    body: {
      value: 'Roboto',
      type: 'fontFamilies',
    },
  },
  lineHeights: {
    heading: {
      value: '110%',
      type: 'lineHeights',
    },
    body: {
      value: '140%',
      type: 'lineHeights',
    },
  },
  letterSpacing: {
    default: {
      value: 0,
      type: 'letterSpacing',
    },
    bigger: {
      value: '105%',
      type: 'letterSpacing',
    },
  },
  paragraphSpacing: {
    h1: {
      value: 32,
      type: 'paragraphSpacing',
    },
    h2: {
      value: 26,
      type: 'paragraphSpacing',
    },
  },
  fontWeights: {
    headingRegular: {
      value: 'Regular',
      type: 'fontWeights',
    },
    headingBold: {
      value: 'Bold',
      type: 'fontWeights',
    },
    bodyRegular: {
      value: 'Regular',
      type: 'fontWeights',
    },
    bodyBold: {
      value: 'Bold',
      type: 'fontWeights',
    },
  },
  fontSizes: {
    min: {
      value: 10,
      type: 'fontSizes',
    },
    xxs: {
      value: 11,
      type: 'fontSizes',
    },
    xs: {
      value: 13,
      type: 'fontSizes',
    },
    sm: {
      value: 14,
      type: 'fontSizes',
    },
    md: {
      value: 15,
      type: 'fontSizes',
    },
    lg: {
      value: 17,
      type: 'fontSizes',
    },
    xl: {
      value: 20,
      type: 'fontSizes',
    },
    xxl: {
      value: 24,
      type: 'fontSizes',
    },
    max: {
      value: 32,
      type: 'fontSizes',
    },
  },
  themeRadius: {
    button: {
      value: 3,
      type: 'borderRadius',
    },
    card: {
      value: 6,
      type: 'borderRadius',
    },
    input: {
      value: 3,
      type: 'borderRadius',
    },
  },
  typography: {
    H1: {
      Bold: {
        type: 'typography',
        value: {
          fontFamily: fontFamilyHeading,
          fontWeight: '$fontWeights.headingBold',
          lineHeight: lineHeightHeading,
          fontSize: '$fontSizes.h1',
          paragraphSpacing: '$paragraphSpacing.h1',
          letterSpacing: letterSpacingDecreased,
        },
      },
      Regular: {
        type: 'typography',
        value: {
          fontFamily: fontFamilyHeading,
          fontWeight: '$fontWeights.headingRegular',
          lineHeight: lineHeightHeading,
          fontSize: '$fontSizes.h1',
          paragraphSpacing: '$paragraphSpacing.h1',
          letterSpacing: letterSpacingDecreased,
        },
      },
    },
    H2: {
      Bold: {
        type: 'typography',
        value: {
          fontFamily: fontFamilyHeading,
          fontWeight: '$fontWeights.headingBold',
          lineHeight: lineHeightHeading,
          fontSize: '$fontSizes.h2',
          paragraphSpacing: paragraphSpacingH2,
          letterSpacing: letterSpacingDecreased,
        },
      },
      Regular: {
        type: 'typography',
        value: {
          fontFamily: fontFamilyHeading,
          fontWeight: '$fontWeights.headingRegular',
          lineHeight: lineHeightHeading,
          fontSize: '$fontSizes.h2',
          paragraphSpacing: paragraphSpacingH2,
          letterSpacing: letterSpacingDecreased,
        },
      },
    },
    Body: {
      type: 'typography',
      value: {
        fontFamily: '$fontFamilies.body',
        fontWeight: '$fontWeights.bodyRegular',
        lineHeight: lineHeightHeading,
        fontSize: '$fontSizes.body',
        paragraphSpacing: paragraphSpacingH2,
      },
    },
  },
};

export default theme;
