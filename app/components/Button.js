import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';

import {
  scale,
  verticalScale,
  moderateScale,
  ScaledSheet,
} from 'react-native-size-matters';

export default function Button(props) {
  const {color, icon, text, widthIcon, heightIcon} = props;

  return (
    <TouchableOpacity activeOpacity={0.5}>
      <View style={[styles.container, {backgroundColor: color}]}>
        <View style={styles.main}>
          <Image
            style={[
              styles.icon,
              {width: scale(widthIcon), height: verticalScale(heightIcon)},
            ]}
            source={icon}
          />
          <Text style={styles.title}>{text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = ScaledSheet.create({
  container: {
    
    width: '300@s',
    height: '35.36@vs', 
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom : '15@vs',
    marginLeft : '34@s'
  },
  main: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: '8@s',
  },
  title: {
    fontSize: '18@ms',
    lineHeight: '18@ms',
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
