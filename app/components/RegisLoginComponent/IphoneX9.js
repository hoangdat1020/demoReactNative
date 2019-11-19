import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {TextInput} from 'react-native-gesture-handler';
import ButtonS from '../Button';

export default class IphoneX8 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.vtext}>
          <Text style={styles.text}>
            {`メールアドレスを${'\n'}
入力してください`}
          </Text>
        </View>
        <View style={styles.vinput}>
          <TextInput placeholder="sample@example.com" style={styles.input} />
          <TextInput placeholder="password" style={styles.input} />
        </View>
        <View style={styles.button}>
          <ButtonS
            color="#FFC209"
            text="登録"
            widthButton="232"
            heightButton="43"
            fontS="16"
            lineH="16"
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
    top: '262@vs',
    width: '208@s',
    height: '52@vs'
  },
  text: {
    fontSize: '26@ms',
    lineHeight: '26@ms',
    textAlign: 'center',
    color: '#FFC209'
  },
  vinput: {
    position: 'absolute',
    top: '381@vs',
    marginLeft: '25@s',
    width: '325@s'
  },
  input: {
    borderBottomColor: '#C5C5C5',
    borderBottomWidth: 1,
    marginBottom: '34@vs'
  },
  button: {
    position: 'absolute',
    top: '531@vs',
    width: '232@s',
    height: '42@vs'
  }
});
