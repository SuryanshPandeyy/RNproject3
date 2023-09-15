/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  Pressable,
  View,
} from 'react-native';
import React from 'react';
import { Header2 as Header } from '../components/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from '../components/Button';
import Menu from '../components/Menu';

const ID = ({ navigation }) => {
  return (
    <>
      <Header navigation={navigation} title="ID Card" />
      <ScrollView style={styles.container}>
        <View style={styles.card}>
          <View style={styles.ellipse}></View>
          <View style={styles.box}>
            <Image
              style={styles.logo}
              source={require('../../assets/Image/visiting_logo.png')}
            />
            <View style={styles.profContainer}>
              <Image
                style={styles.profImg}
                source={require('../../assets/Image/image2.png')}
              />
            </View>
            <View style={styles.bio}>
              <Text style={styles.title}>AARABH PRAJAPAT</Text>
              <Text style={styles.desc}>SALES PARTNER</Text>
            </View>

            <View style={styles.list}>
              <Text style={styles.listText}>Partner ID : MOD377326</Text>
              <Text style={styles.listText}>Mobile No. : 8432431100</Text>
              <Text style={styles.listText}>Email: aarabh852@gmail.com</Text>
              <Text style={styles.listText}>Address: Didwana</Text>
            </View>

            <View style={styles.brands}>
              <View style={styles.brand}>
                <Image
                  style={styles.brandImage}
                  source={require('../../assets/Image/brands/brand1.png')}
                />
              </View>
              <View style={styles.brand}>
                <Image
                  style={styles.brandImage}
                  source={require('../../assets/Image/brands/brand2.png')}
                />
              </View>
              <View style={styles.brand}>
                <Image
                  style={styles.brandImage}
                  source={require('../../assets/Image/brands/brand3.png')}
                />
              </View>
              <View style={styles.brand}>
                <Image
                  style={styles.brandImage}
                  source={require('../../assets/Image/brands/brand4.png')}
                />
              </View>
              <View style={styles.brand}>
                <Image
                  style={styles.brandImage}
                  source={require('../../assets/Image/brands/brand5.png')}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.buttonGroup}>
          <Pressable style={styles.button}>
            <Text style={styles.text}>Download</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.text}>Share</Text>
          </Pressable>
        </View>
      </ScrollView>
      <Menu />
    </>
  );
};

export default ID;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 39,
    paddingHorizontal: 32,
  },
  card: {
    borderWidth: 0.1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    elevation: 10,
    shadowRadius: 3,
    width: '100%',
    height: 600,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  ellipse: {
    backgroundColor: '#32CBFF',
    width: 440,
    height: 440,
    borderRadius: 500,
    position: 'absolute',
    top: -140,
    left: -40,
  },
  box: {
    height: '100%',
    alignItems: 'center',
  },
  logo: {
    marginTop: 37,
    width: 78,
    height: 90,
  },
  profContainer: {
    backgroundColor: '#D0BAEA',
    width: 217,
    height: 217,
    marginTop: 18,
    borderRadius: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profImg: {
    width: 185,
    height: 185,
  },
  bio: {
    borderLeftWidth: 0.5,
    borderLeftColor: '#fff',
    marginTop: 17,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#595959',
    paddingBottom: 5,
  },
  title: {
    fontSize: 22,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#595959',
  },
  desc: {
    fontSize: 16,
    textTransform: 'uppercase',
    letterSpacing: 4,
    color: '#595959',
  },
  list: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4.7,
  },
  listText: {
    fontSize: 12,
    marginVertical: 2,
    color: '#595959',
  },
  brands: {
    flexDirection: 'row',
    marginTop: 10,
  },
  brand: {
    borderRadius: 50,
    marginLeft: 11,
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8F3FD',
  },
  brandImage: {
    width: 30,
    height: 30,
    backgroundColor: '#F8F3FD',
    borderRadius: 50,
  },
  buttonGroup: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 150,
  },
  button: {
    height: 40,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 9,
    width: '45%',
    backgroundColor: '#FFC895',
  },
  text: {
    fontSize: 18,
    color: '#fff',
  },
});
