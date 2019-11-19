import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

export default class IphoneX10 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.vtext}>
          <Text style={styles.text}>
            {`送信されたメールを${'\n'}確認してください`}
          </Text>
        </View>
        <View style={styles.containText}>
          <Text style={styles.textTop}>reply@kumimasu.comから</Text>
          <Text style={styles.textTop}>sample@example.com</Text>
          <Text style={styles.textTop}>
            にメールアドレスの認証用メールを送信しました。
          </Text>
          <Text style={styles.textTop}>
            {`送信されたメールに記載されているコードを入力${'\n'}してください。`}
          </Text>
        </View>
        <View style={styles.chr}>
          <View style={styles.hr} />
          <View style={styles.hr} />
          <View style={styles.hr} />
          <View style={styles.hr} />
          <View style={styles.hr} />
          <View style={styles.hr} />
        </View>
        <View style={styles.vtextBottom}>
          <Text style={styles.textBottom}>
            ※このコードの有効期限は10分です。
          </Text>
          <Text style={styles.textBottom}>
            {`期限内に入力できなかった場合は、再度メールアドレス${'\n'}を登録してください。`}
          </Text>
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
  containText: {
    width: '320@s',
    marginLeft: '25@s',
    marginRight: '22@s',
    position: 'absolute',
    top: '243@vs'
  },
  vtext: {
    position: 'absolute',
    top: '153@vs',
    width: '234@s',
    height: '52@vs'
  },
  text: {
    fontSize: '26@ms',
    lineHeight: '26@ms',
    textAlign: 'center',
    color: '#FFC209'
  },
  textTop: {
    fontSize: '14.4@ms',
    lineHeight: '14.4@ms',
    color: '#666666',
    marginBottom: '18@vs'
  },
  chr: {
    position: 'absolute',
    top: '465@vs',
    flexDirection: 'row'
  },
  hr: {
    width: '33@s',
    height: '1@vs',
    backgroundColor: '#FDC214',
    marginRight: '13@vs'
  },
  vtextBottom: {
    position: 'absolute',
    top: '532@vs',
    width: '328@s',
    marginLeft: '25@s'
  },
  textBottom: {
    fontSize: '12@ms',
    lineHeight: '12@ms',
    marginBottom: '14@vs',
    color: '#666666'
  }
});
