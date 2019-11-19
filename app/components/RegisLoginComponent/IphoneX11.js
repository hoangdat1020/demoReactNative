import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import ButtonS from '../Button';

export default class IphoneX8 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.vtext}>
          <Text style={styles.text}>クミマスへようこそ！</Text>
        </View>
        <Text style={styles.textBottom}>
          まずはチームか個人かを教えてください
        </Text>
        <View style={styles.button}>
          <View style={styles.buttonDistan}>
            <ButtonS
              color="#FFFFFF"
              text="チーム"
              widthButton="226"
              heightButton="40"
              fontS="16"
              lineH="16"
              border="#C1C1C1"
              textColor="#666666"
            />
          </View>
          <ButtonS
            color="#FFFFFF"
            text="個人"
            widthButton="226"
            heightButton="40"
            fontS="16"
            lineH="16"
            border="#C1C1C1"
            textColor="#666666"
          />
        </View>
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
  vtext: {
    position: 'absolute',
    top: '153@vs',
    width: '260@s',
    height: '26@vs'
  },
  text: {
    fontSize: '26@ms',
    lineHeight: '26@ms',
    textAlign: 'center',
    color: '#FFC209'
  },
  button: {
    position: 'absolute',
    top: '312@vs',
    width: '232@s'
  },
  buttonDistan: {
    marginBottom: '20@vs'
  },
  textBottom: {
    position: 'absolute',
    top: '209@vs',
    fontSize: '16@ms',
    lineHeight: '16@ms',
    textAlign: 'center',
    color: '#666666'
  }
});
