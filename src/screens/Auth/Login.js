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

import Ionicons from 'react-native-vector-icons/Ionicons';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView>
      <View style={styles.container}>
        <Logo />
        <View style={styles.heading}>
          <Text style={styles.h1}>Let’s get started</Text>
          <Text style={styles.h2}>Welcome back</Text>
          <Text style={styles.h2}>You’ve been missed!</Text>
        </View>
        <View style={styles.credContainer}>
          <Text style={styles.h3}>Login to your Account</Text>
          <Input
            value={email}
            style2={styles.textInput}
            setValue={setEmail}
            placeholder="Email :"
          />
          <View>
            <Input
              style2={styles.textInput}
              value={password}
              setValue={setPassword}
              placeholder="Password :"
              secureTextEntry={true}
            />
          </View>
        </View>
        <View style={styles.extraInfo}>
          <Text>Forgot Password?</Text>
        </View>
        <View style={styles.button}>
          <Button text="Login" onPress={() => navigation.navigate('Home')} />
        </View>

        <View style={styles.lastInfo}>
          <Text style={styles.lastInfoText}>Don’t have an account?</Text>
          <Pressable onPress={() => navigation.navigate('Register')}>
            <Text
              style={[
                styles.lastInfoText,
                { marginLeft: 10, fontWeight: 'bold' },
              ]}>
              Sign Up
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

export default Login;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 38,
  },
  blacktext: {
    color: '#000',
  },

  heading: {
    marginTop: 65,
    alignItems: 'flex-start',
    width: '100%',
  },

  h1: {
    fontSize: 35,
    fontWeight: 'bold',
    lineHeight: 56,
    color: '#535353',
  },
  h2: {
    fontSize: 24,
    textAlign: 'center',
    lineHeight: 30,
    color: '#535353',
  },
  credContainer: {
    marginTop: 40,
    width: '100%',
  },
  h3: {
    fontSize: 20,
    color: '#535353',
    fontWeight: 'bold',
  },
  extraInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
  },
  button: {
    marginTop: 18,
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
    marginVertical: 7.5,
  },
  chatBtn: {
    marginBottom: 150,
  },
});
