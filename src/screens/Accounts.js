/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Header2 as Header } from '../components/Header';

const Accounts = ({ navigation, route }) => {
  const { params } = route;
  console.log(params);
  return (
    <>
      <Header title={params.title} />
      <Text>Accounts</Text>
    </>
  );
};

export default Accounts;

const styles = StyleSheet.create({});
