/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-dupe-keys */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {formatPrice} from '../../utils/Number';
import {connect} from 'react-redux';
import {actAddToOrder} from '../actions/index';

class CartTotals extends Component {
  removeAll = () => {
    this.props.removeAll();
  };

  navigateOrders = () => {
    this.props.navigation.navigate('Orders');
  };

  addToOrder = () => {
    this.props.addToOrder(this.props.products);
  };

  doubleTask = () => {
    this.removeAll();
    this.navigateOrders();
    this.addToOrder();
  };

  render() {
    const {products} = this.props;
    const s = total(products);
    console.log(this.props.order);
    return (
      <View
        style={{
          width: 420,
          height: 200,
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <TouchableOpacity
          onPress={this.doubleTask}
          style={{
            position: 'absolute',
            backgroundColor: 'red',
            borderRadius: 20,
            marginHorizontal: 40
          }}>
          <Text style={styles.actionText}> Order </Text>
        </TouchableOpacity>
        <View
          style={{
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Text
            style={{
              position: 'absolute',
              top: 40,
              fontSize: 20,
              textTransform: 'uppercase'
            }}>
            TOTAL :{formatPrice(s)}
          </Text>
        </View>
      </View>
    );
  }
}
const total = products => {
  let s = 0;
  for (let i = 0; i < products.length; i++) {
    s += products[i].product.price * products[i].quantity;
  }
  return s;
};
const styles = StyleSheet.create({
  actionText: {
    textTransform: 'uppercase',
    padding: 10,
    fontSize: 30,
    color: 'white',
    textAlign: 'center'
  }
});

const mapStateToProps = state => {
  return {
    order: state.order
  };
};
const mapEventToOrder = dispatch => {
  return {
    addToOrder: data => {
      dispatch(actAddToOrder(data));
    }
  };
};

export default connect(mapStateToProps, mapEventToOrder)(CartTotals);
