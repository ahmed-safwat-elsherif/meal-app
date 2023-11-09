import { PixelRatio } from 'react-native';

const fontScale = PixelRatio.getFontScale();
export const fontSize = (size) => size / fontScale;
