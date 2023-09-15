/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import Input from '../../components/Auth/Input';
import Button from '../../components/Auth/Button';
import Logo from '../../components/Auth/Logo';

const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView>
      <View style={styles.container}>
        <Logo />
        <View style={styles.credContainer}>
          <Input
            style2={styles.textInput}
            value={email}
            setValue={setEmail}
            placeholder="Name"
          />
          <Input
            value={password}
            setValue={setPassword}
            placeholder="Email"
            style2={styles.textInput}
          />
          <Input
            value={password}
            setValue={setPassword}
            placeholder="Mobile Number"
            style2={styles.textInput}
          />
          <Input
            value={password}
            setValue={setPassword}
            placeholder="City"
            style2={styles.textInput}
          />
          <Input
            value={password}
            setValue={setPassword}
            placeholder="Password"
            style2={styles.textInput}
            secureTextEntry={true}
          />
          <Input
            value={password}
            setValue={setPassword}
            placeholder="Confirm Password"
            style2={styles.textInput}
            secureTextEntry={true}
          />
          <Input
            value={password}
            setValue={setPassword}
            placeholder="Refer Code"
            style2={styles.textInput}
          />
        </View>
        <View style={styles.extraInfo}>
          <Pressable style={styles.checkbox}></Pressable>
          <Text style={styles.extraText}>Terms & Conditions</Text>
        </View>

        <View style={styles.button}>
          <Button text="Submit" />
        </View>

        <View style={styles.lastInfo}>
          <Text style={styles.lastInfoText}>You hace an account?</Text>
          <Pressable onPress={() => navigation.navigate('Login')}>
            <Text
              style={[
                styles.lastInfoText,
                { marginLeft: 10, fontWeight: 'bold' },
              ]}>
              Log In
            </Text>
          </Pressable>
        </View>
        <Pressable
          style={styles.chatBtn}
          onPress={() => navigation.navigate('Register')}>
          <Text style={[{ fontSize: 16, fontWeight: 'bold' }]}>Chat Up</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 38,
  },
  blacktext: {
    color: '#000',
  },

  credContainer: {
    marginTop: 36,
    width: '100%',
  },
  extraInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 12,
  },
  button: {
    marginTop: 27,
    width: '100%',
  },

  lastInfo: {
    flexDirection: 'row',
    marginTop: 23,
    marginBottom: 26,
  },
  lastInfoText: {
    fontSize: 16,
  },
  textInput: {
    marginVertical: 5,
  },

  terms: {
    flexDirection: 'row',
  },

  checkbox: {
    width: 22,
    height: 22,
    marginRight: 11,
    borderRadius: 4,
    elevation: 4,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowRadius: 0.6,
  },

  extraText: {
    fontSize: 14,
  },
  chatBtn: {
    marginBottom: 150,
  },
});
