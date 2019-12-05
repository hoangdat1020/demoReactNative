import React, {Component} from 'react';
import Slide from './introduction/slide-introduction';

export default class IphoneX7 extends Component {
  render() {
    return (
      <Slide
        sourceImg={require('../../assets/icon/Pain.png')}
        textBottomIcon={`あなたもクミマス${'\n'}はじめませんか？`}
      />
    );
  }
}
