import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
export default class ScreenTabView1 extends Component {
  render() {
    return <View style={[styles.scene, {backgroundColor: '#ffffff'}]} />;
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1
  }
});
