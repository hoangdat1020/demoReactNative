import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import ButtonS from '../Button';
import ModalDropdown from 'react-native-modal-dropdown';

export default class IphoneX13 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.vtext}>
          <Text style={styles.text}>クミマスへようこそ！</Text>
        </View>
        <Text style={styles.textTop}>基本情報を入力してください</Text>
        <View style={styles.dropdown}>
          <View style={styles.styleDrop}>
            <ModalDropdown
              style={styles.style}
              textStyle={styles.styleText}
              dropdownStyle={styles.dropdownStyle}
              dropdownTextStyle={{fontSize: 20}}
              options={['option 1', 'option 2']}
              defaultValue={'氏名（ニックネーム可'}
            />
            <Image
              style={styles.iconCenter}
              source={require('../../../assets/icon/Drop.png')}
              resizeMode="contain"
            />
          </View>
          <View style={styles.styleDrop}>
            <ModalDropdown
              style={styles.style}
              textStyle={styles.styleText}
              dropdownStyle={styles.dropdownStyle}
              dropdownTextStyle={{fontSize: 20}}
              options={['option 1', 'option 2']}
              defaultValue={'都道府県'}
            />
            <Image
              style={styles.iconCenter}
              source={require('../../../assets/icon/Drop.png')}
              resizeMode="contain"
            />
          </View>
          <View style={styles.styleDrop}>
            <ModalDropdown
              style={styles.style}
              textStyle={styles.styleText}
              dropdownStyle={styles.dropdownStyle}
              dropdownTextStyle={{fontSize: 20}}
              options={['option 1', 'option 2']}
              // defaultIndex={-1}
              defaultValue={'性別'}
            />
            <Image
              style={styles.iconCenter}
              source={require('../../../assets/icon/Drop.png')}
              resizeMode="contain"
            />
          </View>
          <View style={styles.styleDrop}>
            <ModalDropdown
              style={styles.style}
              textStyle={styles.styleText}
              dropdownStyle={styles.dropdownStyle}
              dropdownTextStyle={{fontSize: 20}}
              options={['option 1', 'option 2']}
              defaultValue={'生年月日'}
            />
            <Image
              style={styles.iconCenter}
              source={require('../../../assets/icon/Drop.png')}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={styles.button}>
          <ButtonS
            color="#FFC209"
            text="次へ"
            widthButton="232"
            heightButton="43"
            fontS="16"
            lineH="16"
            textColor="#FFFFFF"
            border="#FFC209"
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
  vtext: {
    position: 'absolute',
    top: '86@vs',
    width: '260@s',
    height: '26@vs'
  },
  text: {
    fontSize: '26@ms',
    lineHeight: '26@ms',
    textAlign: 'center',
    color: '#FFC209'
  },
  button: {
    position: 'absolute',
    top: '643@vs',
    width: '232@s',
    height: '42@vs'
  },
  textTop: {
    position: 'absolute',
    top: '142@vs',
    fontSize: '16@ms',
    lineHeight: '16@ms',
    textAlign: 'center',
    color: '#666666'
  },
  dropdown: {
    position: 'absolute',
    top: '235@vs',
    marginLeft: '30@s'
  },
  dropdownStyle: {
    width: '290@s',
    height: '100@vs'
  },
  style: {
    marginBottom: 34,
    height: 30,
    width: 335,
    borderBottomColor: '#C5C5C5',
    borderBottomWidth: 1
  },
  styleText: {
    color: '#666666',
    fontSize: 16,
    paddingBottom: 9,
    lineHeight: 16
  },
  iconCenter: {
    position: 'absolute',
    width: '3@s',
    height: '5@vs',
    top: '10@vs',
    marginLeft: '289@s'
  }
});
