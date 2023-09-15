/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Home = ({ navigation }) => {
  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        <View style={styles.profile}>
          <View style={styles.profContainer}>
            <Image source={require('../../assets/Image/image.png')} />
          </View>
          <View>
            <Text style={styles.h1}>Hi Aarabh Prajapat</Text>
            <Text style={styles.h2}>Your Refer Code: MOD377326</Text>
          </View>
        </View>

        <View style={styles.cardContainer}>
          <Pressable
            onPress={() => navigation.navigate('Visiting')}
            style={styles.card}>
            <Text style={styles.cardText}>Refer and Earn</Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate('ID')}
            style={styles.card}>
            <Text style={styles.cardText}>Visit Our Website</Text>
          </Pressable>
        </View>

        <View style={styles.annContainer}>
          <Text style={styles.annText}>Announcements</Text>
          <View style={styles.annSlider}>
            <Image
              source={require('../../assets/Image/banner.png')}
              resizeMode="contain"
            />
          </View>
        </View>

        <View style={styles.boxContainer}>
          <View style={styles.flexBoxes}>
            <View style={styles.box}>
              <View style={styles.currencyIcon}>
                <FontAwesome name="rupee" size={25} color="#EF8C8C" />
              </View>
              <View style={styles.currencyText}>
                <Text style={styles.currencyType}>Paid Earning</Text>
                <Text style={styles.currencyAmount}>Rs. 1000</Text>
              </View>
            </View>

            <View style={styles.box}>
              <View style={styles.currencyIcon}>
                <FontAwesome name="rupee" size={25} color="#EF8C8C" />
              </View>
              <View style={styles.currencyText}>
                <Text style={styles.currencyType}>Pending Earning</Text>
                <Text style={styles.currencyAmount}>Rs. 1000</Text>
              </View>
            </View>
          </View>
          {/* 2nd boxes */}
          <View style={styles.flexBoxes}>
            <View style={styles.box}>
              <Pressable style={styles.infoIcon}>
                <Image
                  style={styles.infoImage}
                  source={require('../../assets/icons/infoIcon.png')}
                />
              </Pressable>
              <View style={styles.currencyIcon}>
                <FontAwesome name="rupee" size={25} color="#EF8C8C" />
              </View>
              <View style={styles.currencyText}>
                <Text style={styles.currencyType}>Sign Up Bonus</Text>
                <Text style={styles.currencyAmount}>Rs. 1000</Text>
              </View>
            </View>

            <View style={styles.box}>
              <Pressable style={styles.infoIcon}>
                <Image
                  style={styles.infoImage}
                  source={require('../../assets/icons/infoIcon.png')}
                />
              </Pressable>
              <View style={styles.currencyIcon}>
                <FontAwesome name="rupee" size={25} color="#EF8C8C" />
              </View>
              <View style={styles.currencyText}>
                <Text style={styles.currencyType}>Referal Bonus</Text>
                <Text style={styles.currencyAmount}>Rs. 1000</Text>
              </View>
            </View>
          </View>
        </View>

        {/* <View style={styles.annContainer}>
          <Text style={styles.annText}>Trainings</Text>
          <View style={styles.trainingSlider}>
            <View style={styles.trainingImage}>
              <Image source={require('../../assets/Image/training1.png')} />
            </View>
            <View style={styles.trainingBox}>
              <Text style={styles.trainingText}>
                Money On Dream Introduction
              </Text>
              <View style={styles.trainingDateContainer}>
                <Text style={styles.trainingDate}>June 05, 2022</Text>
                <View style={styles.trainingDateLine}></View>
                <Text style={styles.trainingDate}>11:30AM- 12:30PM</Text>
              </View>
              <View style={styles.join}>
                <Text style={styles.joinText}>Join Now</Text>
              </View>
            </View>
          </View>
        </View> */}
      </ScrollView>
      <Menu />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 13,
    paddingHorizontal: 31,
    backgroundColor: '#fff',
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profContainer: {
    width: 82,
    height: 82,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 17,
  },
  h1: {
    fontSize: 20,
    color: '#595959',
  },
  h2: {
    fontSize: 12,
    color: '#595959',
  },
  annContainer: {
    marginTop: 15,
  },
  annText: {
    fontSize: 20,
    color: '#595959',
    fontWeight: '500',
  },
  annSlider: {
    marginTop: 12,
  },

  boxContainer: {
    marginTop: 3,
  },
  flexBoxes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  box: {
    backgroundColor: '#32CBFF',
    borderRadius: 7,
    paddingVertical: 12,
    paddingHorizontal: 15,
    width: '48%',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  currencyIcon: {
    width: 36,
    height: 36,
    backgroundColor: '#fff',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  currencyText: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  currencyType: {
    fontSize: 12,
    lineHeight: 23,
  },
  currencyAmount: {
    fontSize: 16,
    lineHeight: 30,
  },
  infoIcon: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  infoImage: {
    width: 13,
    height: 13,
  },
  cardContainer: {
    flexDirection: 'row',
    marginTop: 21,
    justifyContent: 'space-between',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFC895',
    borderRadius: 6,
    height: 32,
    width: '48%',
  },

  cardText: {
    color: '#fff',
    fontSize: 14,
  },
  cardImage: {
    backgroundColor: '#D0BAEA',
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    position: 'absolute',
    right: -15,
  },
  cardImage2: {
    backgroundColor: '#D0BAEA',
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    position: 'absolute',
    left: -15,
  },
  trainingSlider: {
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
    paddingHorizontal: 20,
    marginTop: 12,
  },
  trainingImage: {
    backgroundColor: '#F8F3FD',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 9,
    marginRight: 20,
  },
  trainingBox: {
    borderLeftWidth: 1.5,
    borderColor: '#D0BAEA',
    height: 96,
    paddingLeft: 20,
    paddingTop: 10,
  },
  trainingText: {
    color: '#595959',
    fontSize: 15,
  },
  trainingDateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  trainingDate: {
    color: '#595959',
    fontSize: 12,
  },
  trainingDateLine: {
    height: '70%',
    width: 1,
    backgroundColor: '#595959',
    marginHorizontal: 5,
  },
  join: {
    backgroundColor: '#EF8C8C',
    borderRadius: 8.5,
    width: 69,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 2,
    marginTop: 13,
  },
  joinText: {
    fontSize: 12,
  },
});
