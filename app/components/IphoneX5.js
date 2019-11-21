import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

export default class IphoneX5 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.viconCenter}>
            <Image
              style={styles.iconCenter}
              source={require('../../assets/icon/User.png')}
              resizeMode="contain"
            />
          </View>
          <View style={styles.vtextBottomIcon}>
            <Text style={styles.textBottomIcon}>練習相手や対戦相手を探す</Text>
          </View>
          <View style={styles.vtextBottom}>
            <Text style={styles.textBottom}>
              {`掲示板で募集したり、気になる相手${'\n'}がいたらメッセージを送りましょう`}
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
    backgroundColor: '#FFC209'
  },
  vtextBottomIcon: {
    position: 'absolute',
    width: '312@s',
    height: '26@vs',
    top: '273@vs',
    marginLeft: '30@s'
  },
  vtextBottom: {
    position: 'absolute',
    width: '305@s',
    height: '40@vs',
    top: '323@vs',
    marginLeft: '30@s'
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
    position: 'absolute',
    width: '83@s',
    height: '66@vs',
    top: '181@vs',
    marginLeft: '141@s'
  }
});
