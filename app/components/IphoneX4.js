import React, {Component} from 'react';
import Slide from './introduction/slide-introduction';
export default class IphoneX4 extends Component {
  render() {
    return (
      <Slide
        sourceImg={require('../../assets/icon/Calen.png')}
        textBottomIcon="ニュースを見る"
        textBottom={`最新のニュースを${'\n'}確認しましょう`}
      />
    );
  }
}
