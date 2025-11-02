import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/molecules/Header';
import Gap from '../../components/atoms/Gap';
import Button from '../../components/atoms/Button';
import Profile from '../../assets/null-photo.svg'
import TextInput from '../../components/molecules/TextInput';

const SignUp = () => {
  return (
    <View style={styles.container}>
        <Header label="Sign Up" flexdirection="row"/>
        <View style={styles.contentWrapper}>
            <Gap/>
            <Button borderradius={90/2} lebar={90} tinggi={90} color='white' label={<Profile />}/>
            <TextInput label="Full Name" placeholder="Type your full name"/>
            <TextInput label="Email Address" placeholder="Type your email address"/>
            <TextInput label="Password" placeholder="Type your password"/>
            <Button lebar={300} label="Continue"/>
        </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
 container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 26,
  },
  contentWrapper: {
    marginTop: 24,
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 26,
    alignItems: 'center'
  },
});
