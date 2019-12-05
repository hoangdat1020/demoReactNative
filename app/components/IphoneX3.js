import React, {Component} from 'react';
import Slide from './introduction/slide-introduction';

export default class IphoneX3 extends Component {
  render() {
    return (
      <Slide
        sourceImg={require('../../assets/icon/Find.png')}
        textBottomIcon="人・チームを探す"
        textBottom={`気になる人やチームを${'\n'}検索しましょう`}
      />
    );
  }
}
