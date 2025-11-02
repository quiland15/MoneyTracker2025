import {StyleSheet, Text, View, TextInput as Input} from 'react-native';
import React from 'react';

const TextInput = ({label, placeholder, fontstyle="normal", ...rest}) => {
  return (
    <View>
      <Text style={styles.label(fontstyle)}>{label}</Text>
      <Input placeholder={placeholder} style={styles.input} {...rest} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: fontstyle => ({
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    marginBottom: 6,
    fontStyle: fontstyle,
  }),
  input: {
    borderColor: '#020202',
    borderRadius: 8,
    borderWidth: 1,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    padding: 10,
    width: '300',
    marginBottom: '16',
  },
});
