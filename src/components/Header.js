/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.headerFlex}>
        <Entypo
          name="dots-three-vertical"
          style={{ marginRight: 12 }}
          size={25}
          color="#32CBFF"
        />

        <Text style={styles.heading}>Money On Dream</Text>
      </Pressable>
      <View style={styles.headerFlex}>
        <Entypo name="share" size={25} color="#32CBFF" />
        <Ionicons
          name="notifications"
          style={{ marginLeft: 10 }}
          size={25}
          color="#32CBFF"
        />
      </View>
    </View>
  );
};

const Header2 = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View style={styles2.container}>
      <Pressable e onPress={() => navigation.goBack()}>
        <Entypo name="chevron-thin-left" color="#32CBFF" size={30} />
      </Pressable>
      <Text style={styles2.heading}>{title}</Text>
    </View>
  );
};

export default Header;
export { Header2 };

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 69,
    paddingRight: 14,
    paddingLeft: 21,
    backgroundColor: '#FAFAFA',
  },
  blackText: {
    color: '#000',
    marginHorizontal: 10,
  },
  headerFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heading: {
    color: '#595959',
    fontSize: 22,
  },
});

const styles2 = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 69,
    paddingLeft: 32,
    backgroundColor: '#FAFAFA',
  },
  heading: {
    color: '#595959',
    fontSize: 22,
    marginLeft: 19,
  },
});
