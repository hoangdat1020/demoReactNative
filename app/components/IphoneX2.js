import React, {Component} from 'react';
import Slide2 from './introduction/slide2';
export default class IphoneX2 extends Component {
  render() {
    return (
      <Slide2
        textTop="スポーツと人を繋ぐ。"
        sourceImg={require('../../assets/icon/group1.png')}
        textBottomIcon="クミマス"
        textBottom="クミマスはスポーツと人々を繋ぐ マッチングサービスです"
      />
    );
  }
}
