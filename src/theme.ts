const shades: any = {
  lowest: 50,
  lower: 100,
  low: 300,
  medium: 500,
  hight: 700,
  highter: 900,
  hightest: 950,
};

const getReverseShadeIndex = (length: number, index: number) => length - index;

export const getThemeColors = (color: any) => {
  const lightColors: any = {};
  const darkColors: any = {};
  const shadesKeys = Object.keys(shades);
  shadesKeys.forEach((shade, index) => {
    lightColors[shade] = color[shades[shade]];
    const reverseShadeIndex = getReverseShadeIndex(shadesKeys.length, index);
    darkColors[shade] = color[shades[reverseShadeIndex]];
  });
  return {
    light: { ...lightColors },
    darkColors: { ...darkColors },
  };
};
