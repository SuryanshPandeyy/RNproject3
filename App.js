/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, { useContext, useEffect, useMemo } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ActivityIndicator,
  Text,
} from 'react-native';
import Login from './src/screens/Auth/Login';
import Register from './src/screens/Auth/Register';
import Home from './src/screens/Home';
import Visiting from './src/screens/Visiting';
import ID from './src/screens/ID';
import Products from './src/screens/Products';
import Accounts from './src/screens/Accounts';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthContext } from './src/context/context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
//const Drawer = createDrawerNavigator();

export default function App() {
  const initialLoginState = {
    isLoading: true,
    id: null,
    userToken: null,
  };

  const loginReducer = (state, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...state,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...state,
          id: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...state,
          id: null,
          userToken: null,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );

  const authContext = useMemo(
    () => ({
      signIn: async (token, email) => {
        let userToken = String(token);
        let userEmail = String(email);
        try {
          await AsyncStorage.setItem('userToken', userToken);
          await AsyncStorage.setItem('email', userEmail);
        } catch (e) {
          console.log(e);
        }

        dispatch({ type: 'LOGIN', id: userEmail, token: userToken });
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem('userToken');
          await AsyncStorage.removeItem('email');
        } catch (e) {
          console.log(e);
        }
        dispatch({ type: 'LOGOUT' });
      },
    }),
    [],
  );

  useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const authScreen = [
    {
      id: 1,
      name: 'Login',
      component: Login,
      option: ({ route }) => ({
        headerShown: false,
        animation: 'none',
      }),
    },
    {
      id: 2,
      name: 'Register',
      component: Register,
      option: ({ route }) => ({
        headerShown: false,
        animation: 'none',
      }),
    },
    {
      id: 3,
      name: 'Home',
      component: Home,
      option: ({ route }) => ({
        headerShown: false,
        animation: 'none',
      }),
    },
    {
      id: 4,
      name: 'Visiting',
      component: Visiting,
      option: ({ route }) => ({
        headerShown: false,
        animation: 'none',
      }),
    },
    {
      id: 5,
      name: 'ID',
      component: ID,
      option: ({ route }) => ({
        headerShown: false,
        animation: 'none',
      }),
    },
    {
      id: 6,
      name: 'Products',
      component: Products,
      option: ({ route }) => ({
        headerShown: false,
        animation: 'none',
      }),
    },
    {
      id: 6,
      name: 'Accounts',
      component: Accounts,
      option: ({ route }) => ({
        headerShown: false,
        animation: 'none',
      }),
    },
  ];

  return (
    <AuthContext.Provider value={authContext}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            {authScreen.map((opt, i) => {
              return (
                <Stack.Screen
                  key={i}
                  name={opt.name}
                  component={opt.component}
                  options={opt.option}
                />
              );
            })}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#EF8C8C', marginTop: 0 },
});
