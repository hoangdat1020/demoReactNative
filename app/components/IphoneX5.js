import React, {Component} from 'react';
import Slide from './introduction/slide-introduction';
export default class IphoneX5 extends Component {
  render() {
    return (
      <Slide
        sourceImg={require('../../assets/icon/User.png')}
        textBottomIcon="練習相手や対戦相手を探す"
        textBottom={`掲示板で募集したり、気になる相手${'\n'}がいたらメッセージを送りましょう`}
      />
    );
  }
}
