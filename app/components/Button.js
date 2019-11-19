import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';

import {scale, verticalScale, ScaledSheet} from 'react-native-size-matters';

export default function Button(props) {
  const {
    color,
    icon,
    text,
    widthIcon,
    heightIcon,
    widthButton,
    heightButton,
    fontS,
    lineH,
    border,
    textColor
  } = props;

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.5}>
      <View
        style={[
          styles.container1,
          {
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: border,
            backgroundColor: color,
            width: scale(widthButton),
            height: verticalScale(heightButton)
          }
        ]}>
        <View style={styles.main}>
          {icon && widthIcon && heightIcon && (
            <Image
              style={[
                styles.icon,
                {width: scale(widthIcon), height: verticalScale(heightIcon)}
              ]}
              source={icon}
            />
          )}
          <Text
            style={[
              styles.title,
              {
                color: textColor,
                fontSize: scale(fontS),
                lineHeight: verticalScale(lineH)
              }
            ]}>
            {text}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container1: {
    width: '300@s',
    height: '35.36@vs',
    borderRadius: 50,
    marginBottom: '15@vs',
    justifyContent: 'center',
    alignItems: 'center'
  },
  main: {
    flexDirection: 'row'
  },
  icon: {
    marginRight: '8@s'
  },
  title: {
    fontSize: '18@ms',
    lineHeight: '18@ms',
    textAlign: 'center',
    color: '#FFFFFF'
  }
});
