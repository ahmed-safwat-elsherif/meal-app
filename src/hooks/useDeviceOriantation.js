import { useWindowDimensions } from 'react-native';

export const useDeviceOriantation = () => {
  const measures = useWindowDimensions();

  const isLandscape = measures.height < measures.width;

  return {
    ...measures,
    isLandscape,
  };
};
