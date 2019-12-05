/* eslint-disable consistent-return */
/* eslint-disable default-case */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react-native/no-unused-styles */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/sort-comp */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Dimensions} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';
import FirstRoute from './ScreenTabView1';
import SecondRoute from './ScreenTabView2';
class OrdersScreen extends Component {
  static navigationOptions = {
    title: 'Orders'
  };

  constructor(props) {
    super(props);
    this.state = {
      user: [],
      index: 1,
      routes: [
        {key: 'first', title: 'Đã lấy hàng'},
        {key: 'second', title: 'Chờ lấy hàng'}
      ]
    };
  }

  renderScene = ({route}) => {
    switch (route.key) {
      case 'first':
        return <FirstRoute />;
      case 'second':
        return <SecondRoute navigation={this.props.navigation} />;
    }
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this.renderScene}
        onIndexChange={index => this.setState({index})}
        initialLayout={{width: Dimensions.get('window').width}}
        renderTabBar={props => (
          <TabBar {...props} indicatorStyle={{backgroundColor: 'white'}} />
        )}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

export default connect(mapStateToProps)(OrdersScreen);
