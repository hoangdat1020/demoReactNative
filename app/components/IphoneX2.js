import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, SafeAreaView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';


export default class IphoneX2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.vtextTop}>
          <Text style={styles.textTop}>スポーツと人を繋ぐ。</Text>
        </View>
        <View>
          <Image
            style={styles.iconCenter}
            source={require('../../assets/icon/group1.png')}
            resizeMode="contain"
          />
          <View style={styles.vtextBottomIcon}>
            <Text style={styles.textBottomIcon}>クミマス</Text>
          </View>
          <View style={styles.vtextBottom}>
            <Text style={styles.textBottom}>
              クミマスはスポーツと人々を繋ぐ マッチングサービスです
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#FFC209',
  },
  vtextBottomIcon: {
    position: 'absolute',
    width: '104@s',
    height: '26@vs',
    top: '293@vs',
    left: '136@s',
  },
  vtextBottom: {
    position: 'absolute',
    width: '282@s',
    height: '40@vs',
    top: '354@vs',
    left: '47@s',
  },
  textBottom: {
    fontSize: '20@ms',
    lineHeight: '20@ms',
    textAlign: 'center',
    color: '#FFFFFF',
  },

  textBottomIcon: {
    fontSize: '26@ms',
    lineHeight: '26@ms',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  iconCenter: {
    position: 'absolute',
    width: '127@s',
    height: '136.31@vs',
    top: '145@vs',
    left: '125@s',
  },
  vtextTop: {
    position: 'absolute',
    width: '200@s',
    height: '20@vs',
    left: '88@vs',
    top: '83@vs',
  },
  textTop: {
    fontSize: '20@ms',
    lineHeight: '20@ms',
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
