import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';


export default class IphoneX3 extends Component {
  render() {
    return (
      <View style={styles.container}>
      
        <View>
          <View style={styles.viconCenter}>
          <Image
            style={styles.iconCenter}

            source={require('../../assets/icon/Find.png')}
            resizeMode="contain"
          />
          </View>
          <View style={styles.vtextBottomIcon}>
            <Text style={styles.textBottomIcon}>人・チームを探す</Text>
          </View>
          <View style={styles.vtextBottom}>
            <Text style={styles.textBottom}>
            気になる人やチームを
              検索しましょう
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
    width: '208@s',
    height: '26@vs',
    top: '273@vs',
    left: '92@s',
  },
  vtextBottom: {
    position: 'absolute',
    width: '184@s',
    height: '40@vs',
    top: '323@vs',
    left: '109@s',
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
    width: '84@s',
    height: '82.5@vs',
    top: '163@vs',
     marginLeft : '146@s'
   
  }
  ,
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
