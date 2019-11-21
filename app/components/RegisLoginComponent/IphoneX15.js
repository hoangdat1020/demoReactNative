import React, {Component} from 'react';
import {Text, Image, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import ButtonS from '../Button';

export default class IphoneX15 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textTop}>写真を設定しましょう</Text>
        <View style={styles.viconCenter}>
          <Image
            style={styles.iconCenter}
            source={require('../../../assets/icon/Frame.png')}
            resizeMode="contain"
          />
        </View>
        <View style={styles.button}>
          <ButtonS
            color="#FDC214"
            text="設定する"
            widthButton="226"
            heightButton="40"
            fontS="16"
            lineH="16"
            border="#FDC214"
            textColor="#FFFFFF"
          />
        </View>
        <Text style={styles.textBottom}>あとで</Text>
      </View>
    );
  }
}
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    position: 'absolute',
    top: '428@vs',
    width: '227@s'
  },
  textTop: {
    position: 'absolute',
    top: '84@vs',
    fontSize: '16@ms',
    lineHeight: '16@ms',
    textAlign: 'center',
    color: '#666666'
  },
  textBottom: {
    position: 'absolute',
    top: '490@vs',
    fontSize: '16@ms',
    lineHeight: '16@ms',
    textAlign: 'center',
    color: '#666666'
  },
  iconCenter: {
    width: '220@s',
    height: '220@vs'
  },
  viconCenter: {
    position: 'absolute',
    top: '142@vs'
  }
});
