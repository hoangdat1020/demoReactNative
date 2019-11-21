import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

export default class IphoneX7 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.viconCenter}>
            <Image
              style={styles.iconCenter}
              source={require('../../assets/icon/Pain.png')}
              resizeMode="contain"
            />
          </View>
          <View style={styles.vtextBottomIcon}>
            <Text style={styles.textBottomIcon}>あなたもクミマス</Text>
            <Text style={styles.textBottomIcon2}>はじめませんか？</Text>
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
    backgroundColor: '#FFC209'
  },
  vtextBottomIcon: {
    position: 'absolute',
    width: '234@s',
    height: '52@vs',
    top: '285@vs',
    marginLeft: '69@s'
  },
  textBottomIcon: {
    fontSize: '26@ms',
    lineHeight: '26@ms',
    textAlign: 'center',
    color: '#FFFFFF'
  },
  textBottomIcon2: {
    marginLeft: '35@s',
    fontSize: '26@ms',
    lineHeight: '26@ms',
    textAlign: 'center',
    color: '#FFFFFF'
  },
  iconCenter: {
    position: 'absolute',
    width: '73@s',
    height: '73@vs',
    top: '180@vs',
    marginLeft: '157@s'
  }
});
