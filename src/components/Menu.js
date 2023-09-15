/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const Menu = () => {
  const navigation = useNavigation();
  const router = useRoute();

  const menuList = [
    {
      title: 'Home',
      img: require('../../assets/icons/menu/home.png'),
      img_active: require('../../assets/icons/menu/home_active.png'),
      link: 'Home',
      subLink: ['ID', 'Visiting'],
    },
    {
      title: 'Products',
      img: require('../../assets/icons/menu/prod.png'),
      img_active: require('../../assets/icons/menu/prod_active.png'),
      link: 'Products',
      subLink: [''],
    },
    {
      title: 'Leads',
      img: require('../../assets/icons/menu/leads.png'),
      img_active: require('../../assets/icons/menu/leads.png'),
      link: 'Home',
      subLink: [''],
    },
    {
      title: 'Team',
      img: require('../../assets/icons/menu/team.png'),
      img_active: require('../../assets/icons/menu/team_active.png'),
      link: 'Home',
      subLink: [''],
    },
    {
      title: 'Profile',
      img: require('../../assets/icons/menu/leads.png'),
      img_active: require('../../assets/icons/menu/leads.png'),
      link: 'Home',
      subLink: [''],
    },
  ];

  return (
    <View style={styles.container}>
      {menuList.map((item, i) => {
        return (
          <Pressable
            style={styles.menu}
            key={i}
            onPress={() => navigation.navigate(item.link)}>
            <Image
              source={
                item.subLink.includes(router.name) || router.name === item.title
                  ? item.img_active
                  : item.img
              }
            />
            <Text style={styles.text}>{item.title}</Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
  },
  text: {
    fontSize: 12,
    color: '#636363',
    textAlign: 'center',
  },
  menu: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
