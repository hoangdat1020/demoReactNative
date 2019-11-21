import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {formatPrice} from '../../utils/Number';

export default class CartTotals extends Component {
  render() {
    let s = 0;
    const {products} = this.props;
    for (let i = 0; i < products.length; i++) {
      s += products[i].product.price * products[i].quantity;
    }

    return (
      <View style={{width: 420, height: 100, position: 'relative'}}>
        <Text
          style={{
            position: 'absolute',
            right: 150,
            fontSize: 20,
            marginTop: 10,
            marginLeft: 10,
            textTransform: 'uppercase'
          }}>
          TOTAL :{formatPrice(s)}
        </Text>
      </View>
    );
  }
}
