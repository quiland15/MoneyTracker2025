import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../../atoms/Button';
import Back from '../../../assets/arrow_back_ios_24px';

const Header = ({label, flexdirection="column"}) => {
  return (
    <View style={styles.container(flexdirection)}>
      <Button color='white' label={<Back/>} pading={5} tinggi={105}/>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: flexdirection => ({
    backgroundColor: '#FFFFFF',
    flexDirection: flexdirection,
  }),
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    paddingLeft: 24,
    paddingVertical: 37,
  },
});
