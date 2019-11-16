
import React, { Component } from 'react'
import { Text } from 'react-native';
import {connect} from 'react-redux';

 class OrdersScreen extends Component {
  static navigationOptions = {
    title: 'Orders'
  };
  constructor(props) {
    super(props);
    this.state = {
      user: [],
    };
  }
  componentDidMount() {
    try {
         var userProps= this.props.user;
      this.setState({
        user: [...userProps],
      });
    } catch (error) {
      console.log(error);
    }
 
  }
  render() {
    
    console.log(this.state.user);
    return <Text>Orders</Text>
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(
  mapStateToProps
)(OrdersScreen);