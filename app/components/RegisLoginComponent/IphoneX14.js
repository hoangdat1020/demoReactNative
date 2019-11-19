import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import ButtonS from '../Button';

export default class IphoneX14 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textTop}>あてはまるものを選択してください</Text>
        <View style={styles.button}>
          <View style={styles.buttonDistan}>
            <ButtonS
              color="#FFFFFF"
              text="小学生i"
              widthButton="226"
              heightButton="40"
              fontS="16"
              lineH="16"
              border="#FDC214"
              textColor="#FDC214"
            />
          </View>
          <View style={styles.buttonDistan}>
            <ButtonS
              color="#FFFFFF"
              text="中学生"
              widthButton="226"
              heightButton="40"
              fontS="16"
              lineH="16"
              border="#C1C1C1"
              textColor="#666666"
            />
          </View>
          <View style={styles.buttonDistan}>
            <ButtonS
              color="#FFFFFF"
              text="高校生"
              widthButton="226"
              heightButton="40"
              fontS="16"
              lineH="16"
              border="#C1C1C1"
              textColor="#666666"
            />
          </View>
          <View style={styles.buttonDistan}>
            <ButtonS
              color="#FFFFFF"
              text="大学生"
              widthButton="226"
              heightButton="40"
              fontS="16"
              lineH="16"
              border="#C1C1C1"
              textColor="#666666"
            />
          </View>
          <View style={styles.buttonDistan}>
            <ButtonS
              color="#FFFFFF"
              text="社会人"
              widthButton="226"
              heightButton="40"
              fontS="16"
              lineH="16"
              border="#C1C1C1"
              textColor="#666666"
            />
          </View>
          <View style={styles.buttonDistan}>
            <ButtonS
              color="#FFFFFF"
              text="選択しない"
              widthButton="226"
              heightButton="40"
              fontS="16"
              lineH="16"
              border="#C1C1C1"
              textColor="#666666"
            />
          </View>
        </View>
        <View style={styles.buttonC}>
          <ButtonS
            color="#FDC214"
            text="次へ"
            widthButton="226"
            heightButton="40"
            fontS="16"
            lineH="16"
            border="#FDC214"
            textColor="#FFFFFF"
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
  button: {
    position: 'absolute',
    top: '164@vs',
    width: '227@s'
  },
  buttonDistan: {
    marginBottom: '13@vs'
  },
  textTop: {
    position: 'absolute',
    top: '84@vs',
    fontSize: '16@ms',
    lineHeight: '16@ms',
    textAlign: 'center',
    color: '#666666'
  },
  buttonC: {
    position: 'absolute',
    top: '643@vs',
    width: '227@s'
  }
});
