import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FONTS } from '../utils/fontVariants';

const Error = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.errMsg}>Somthing went wrong!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errMsg: {
    fontSize: 30,
    fontFamily: FONTS.Montserrat_Semi_Bold,
    color: 'red',
    textAlign: 'center',
  },
});

export default Error;
