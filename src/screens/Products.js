/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  Image,
  View,
  FlatList,
  Pressable,
} from 'react-native';
import React from 'react';
import Menu from '../components/Menu';
import { Header2 as Header } from '../components/Header';

const Products = ({ navigation }) => {
  const products = [
    {
      id: 0,
      img: require('../../assets/icons/products/saving.png'),
      title: 'Saving Accounts',
      product: '05',
      desc: 'Earn Up to Rs. 1450/-',
    },
    {
      id: 1,
      img: require('../../assets/icons/products/saving.png'),
      title: 'Demate Accounts',
      product: '05',
      desc: 'Earn Up to Rs. 1450/-',
    },
    {
      id: 2,
      img: require('../../assets/icons/products/personal.png'),
      title: 'Personal Loan',
      product: '05',
      desc: 'Earn Up to Rs. 1450/-',
    },
    {
      id: 3,
      img: require('../../assets/icons/products/credit.png'),
      title: 'Credit Cards',
      product: '05',
      desc: 'Earn Up to Rs. 1450/-',
    },
    {
      id: 4,
      img: require('../../assets/icons/products/credit.png'),
      title: 'EMI Cards',
      product: '05',
      desc: 'Earn Up to Rs. 1450/-',
    },
    {
      id: 5,
      img: require('../../assets/icons/products/credit.png'),
      title: 'Credit Cards',
      product: '05',
      desc: 'Earn Up to Rs. 1450/-',
    },
  ];
  return (
    <>
      <Header title="Products" />
      <View style={styles.container}>
        <FlatList
          data={products}
          keyExtractor={item => item.id} //has to be unique
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                navigation.navigate('Accounts', {
                  title: item.title,
                });
              }}
              style={[styles.product]}>
              <Image
                source={item.img}
                style={styles.image}
                resizeMode="contain"
              />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.productNo}>Product: {item.product}</Text>
              <View style={styles.productDescBox}>
                <Text style={styles.productDesc}>{item.desc}</Text>
              </View>
            </Pressable>
          )}
          horizontal={false}
          numColumns={2}
        />
      </View>
      <Menu />
    </>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 14,
    paddingHorizontal: 32,
    backgroundColor: '#F8F3FD',
    flex: 1,
  },
  product: {
    backgroundColor: '#fff',
    width: 158,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingTop: 22,
    paddingBottom: 5,
    paddingHorizontal: 4,
    borderRadius: 7,
  },
  image: {
    width: 60,
    height: 60,
  },
  title: {
    color: '#595959',
    paddingTop: 13,
    fontSize: 16,
  },
  productNo: {
    color: '#595959',
    marginVertical: 10,
    fontSize: 12,
  },
  productDescBox: {
    backgroundColor: '#F8F3FD',
    width: '100%',
    paddingVertical: 4,
    borderRadius: 5,
  },
  productDesc: {
    textAlign: 'center',
    color: '#595959',
    fontSize: 12,
  },
});
