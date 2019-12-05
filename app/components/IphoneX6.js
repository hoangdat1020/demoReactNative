import React, {Component} from 'react';
import Slide from './introduction/slide-introduction';
export default class IphoneX6 extends Component {
  render() {
    return (
      <Slide
        sourceImg={require('../../assets/icon/Point.png')}
        textBottomIcon="場所を探す"
        textBottom={`施設情報から${'\n'}問い合わせましょう`}
      />
    );
  }
}
