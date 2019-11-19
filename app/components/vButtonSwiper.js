import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import ButtonS from './Button';

export default class ButtonSwiper extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ButtonS
          color="#3069B3"
          icon={require('../../assets/Facebook.png')}
          widthIcon="6.6"
          heightIcon="14"
          text="Facebookではじめる"
          fontS="18"
          lineH="18"
          border="#3069B3"
          textColor="#FFFFFF"
          widthButton="300"
          heightButton="35.36"
        />
        <ButtonS
          color="#00BEF1"
          icon={require('../../assets/Insta.png')}
          widthIcon="13.8"
          heightIcon="11.3"
          text="Twitterではじめる"
          fontS="18"
          lineH="18"
          border="#00BEF1"
          textColor="#FFFFFF"
          widthButton="300"
          heightButton="35.36"
        />
        <ButtonS
          color="#62EBEF"
          icon={require('../../assets/Email.png')}
          widthIcon="15.4"
          heightIcon="10.2"
          text="メールアドレスではじめる"
          fontS="18"
          lineH="18"
          border="#62EBEF"
          textColor="#FFFFFF"
          widthButton="300"
          heightButton="35.36"
        />
        <ButtonS
          color="#FFC209"
          icon={require('../../assets/Hand.png')}
          widthIcon="17"
          heightIcon="18"
          text="新規登録"
          fontS="18"
          lineH="18"
          border="#FFC209"
          textColor="#FFFFFF"
          widthButton="300"
          heightButton="35.36"
        />
        <View style={styles.vBottomButton}>
          <Text style={styles.tBottomButton}>
            会員登録はチームでも個人可能です
          </Text>
        </View>

        <View style={styles.vBottom}>
          <Image
            style={styles.iBottom}
            source={require('../../assets/chamH.png')}
          />
          <Text style={styles.tBottom}>
            ログイン・新規登録にお困りのお客様へ
          </Text>
        </View>
        <View style={styles.vBottom}>
          <Image
            style={styles.iBottom}
            source={require('../../assets/Calendar.png')}
          />
          <Text style={styles.tBottom}>利用規約</Text>
          <Image
            style={styles.i2Bottom}
            source={require('../../assets/Lock.png')}
          />
          <Text style={styles.tBottom}>プライバシーポリシー</Text>
        </View>
      </View>
    );
  }
}
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    marginTop: '21@vs'
  },
  vBottomButton: {
    marginTop: '-7@vs',
    marginBottom: '29@vs'
  },
  tBottomButton: {
    fontSize: '12@ms',
    lineHeight: '12@ms',
    textAlign: 'center',
    color: '#666666'
  },
  vBottom: {
    flexDirection: 'row',
    marginBottom: '12@vs',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tBottom: {
    fontSize: '12@ms',
    lineHeight: '12@ms',
    textAlign: 'center',
    color: '#666666'
  },
  iBottom: {
    width: '11.4@s',
    height: '11.4@vs',
    marginRight: '7@s'
  },
  i2Bottom: {
    width: '8@s',
    height: '11.4@vs',
    marginRight: '7@s',
    marginLeft: '12@s'
  }
});
