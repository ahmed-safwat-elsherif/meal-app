import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SafeAreaView = (props) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      {...props}
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBotton: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    />
  );
};

export default SafeAreaView;
