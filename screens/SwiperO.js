/* eslint-disable no-dupe-keys */
import React, {Component} from 'react';
import {View, SafeAreaView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import IphoneX2 from '../app/components/IphoneX2';
import IphoneX3 from '../app/components/IphoneX3';
import IphoneX4 from '../app/components/IphoneX4';
import IphoneX5 from '../app/components/IphoneX5';
import IphoneX6 from '../app/components/IphoneX6';
import IphoneX7 from '../app/components/IphoneX7';
import ButtonSwiper from '../app/components/vButtonSwiper';
import Swiper from 'react-native-swiper';
import AppIntro from 'react-native-app-intro';
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column'
  },

  wrapperTop: {
    flex: 1.5
  },
  wrapperBottom: {
    flex: 1
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },

  styleDot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 17,
    height: 3,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
    backgroundColor: '#FFDA6B'
  },
  styleActiveDot: {
    width: 17,
    height: 3,
    backgroundColor: '#FFFFFF'
  }
});

export default class extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapperTop}>
          {/* <Swiper
            dot={<View style={styles.styleDot} />}
            activeDot={<View style={styles.styleActiveDot} />}> */}
          <AppIntro
            dotColor="orange"
            dotStyle={{
              width: 13,
              height: 13,
              borderRadius: 7,
              marginLeft: 7,
              marginRight: 7,
              marginTop: 7,
              marginBottom: 7
            }}>
            <IphoneX2 style={{height: 482}} />
            <IphoneX3 style={{height: 482}} />
            <IphoneX4 style={{height: 482}} />
            <IphoneX5 style={{height: 482}} />
            <IphoneX6 style={{height: 482}} />
            <IphoneX7 style={{height: 482}} />
          </AppIntro>
          {/* </Swiper> */}
        </View>

        <View style={styles.wrapperBottom}>
          <ButtonSwiper />
        </View>
      </SafeAreaView>
    );
  }
}
