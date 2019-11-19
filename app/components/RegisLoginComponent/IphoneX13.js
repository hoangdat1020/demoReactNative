import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import ButtonS from '../Button';

export default class IphoneX13 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.vtext}>
          <Text style={styles.text}>クミマスへようこそ！</Text>
        </View>
        <Text style={styles.textTop}>基本情報を入力してください</Text>
        <View style={styles.button}>
          <ButtonS
            color="#FFC209"
            text="次へ"
            widthButton="232"
            heightButton="43"
            fontS="16"
            lineH="16"
            textColor="#FFFFFF"
            border="#FFC209"
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
    top: '86@vs',
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
    top: '643@vs',
    width: '232@s',
    height: '42@vs'
  },
  textTop: {
    position: 'absolute',
    top: '142@vs',
    fontSize: '16@ms',
    lineHeight: '16@ms',
    textAlign: 'center',
    color: '#666666'
  }
});
