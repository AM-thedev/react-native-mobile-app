import React from 'react';
import { Text as NativeText, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorTextTab: {
    color: theme.colors.textTab
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  backgroundColorPrimary: {
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    borderRadius: 45 / 8,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 5
  },
  review: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
    borderWidth: 3,
    borderColor: theme.colors.primary,
    textAlign: 'center',
    // needed for proper vertical text alignment for some reason
    paddingTop: 8
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
});

const Text = ({ color, backgroundColor, review, fontSize, fontWeight, style, ...props }) => {
  const textStyle = [
    styles.text,
    color === 'textTab' && styles.colorTextTab,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    backgroundColor === 'primary' && styles.backgroundColorPrimary,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold,
    review === 'true' && styles.review,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;