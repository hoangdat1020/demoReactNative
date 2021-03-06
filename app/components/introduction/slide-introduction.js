import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

export default class IphoneX3 extends Component {
  render() {
    const {
      sourceImg,
      textBottomIcon,
      textBottom,
      heightTextBottom
    } = this.props;
    return (
      <View style={styles.container}>
        <View
          style={{
            alignItems: 'center'
          }}>
          <Image
            style={styles.iconCenter}
            source={sourceImg}
            resizeMode="contain"
          />
          <View style={[styles.vtextBottomIcon, {height: heightTextBottom}]}>
            <Text style={styles.textBottomIcon}>{textBottomIcon}</Text>
          </View>
          <View style={styles.vtextBottom}>
            <Text style={styles.textBottom}>{textBottom}</Text>
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
    top: '190@vs',
    height: '26@vs'
  },
  vtextBottom: {
    height: '40@vs',
    top: '214@vs'
  },
  textBottom: {
    fontSize: '20@ms',
    lineHeight: '20@ms',
    textAlign: 'center',
    color: '#FFFFFF'
  },
  textBottomIcon: {
    fontSize: '26@ms',
    lineHeight: '26@ms',
    textAlign: 'center',
    color: '#FFFFFF'
  },
  iconCenter: {
    width: '84@s',
    height: '82.5@vs',
    top: '163@vs'
  }
});
