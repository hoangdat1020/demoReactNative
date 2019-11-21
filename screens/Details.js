/* eslint-disable react/destructuring-assignment */
import React, {Component} from 'react';
import {View} from 'react-native';
import DetailsItem from '../app/components/DetailsProduct';

export default class Details extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('title')
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }

  componentDidMount() {
    this.setState({
      product: this.props.navigation.getParam('product')
    });
  }

  render() {
    const {product} = this.state;
    if (!product) {
      return <View />;
    }
    return <DetailsItem product={product} />;
  }
}
