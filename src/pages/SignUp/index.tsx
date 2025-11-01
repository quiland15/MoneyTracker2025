import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SignUp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Money Tracker</Text>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#02CF8E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 32,
  },
});
