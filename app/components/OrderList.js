/* eslint-disable react/destructuring-assignment */
import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {formatPrice} from '../../utils/Number';

export default class OrderList extends Component {
  _navigateFromOrderToDetail = () => {
    this.props.navigation.navigate('Details', {
      title: this.props.cart.product.name,
      id: this.props.cart.product.id,
      product: this.props.cart.product
    });
  };

  render() {
    const {cart} = this.props;
    return (
      <View style={styles.shadow}>
        <View style={styles.container}>
          <View style={styles.test}>
            <TouchableOpacity onPress={this._navigateFromOrderToDetail}>
              <Image
                style={styles.img}
                source={{uri: cart.product.images[0].url}}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.info}>
            <Text style={styles.name}>{cart.product.name}</Text>
            <View style={styles.priceRow}>
              <Text style={styles.price}>
                {formatPrice(cart.product.price * cart.quantity)}
              </Text>
              <Text style={{fontSize: 20}}> {cart.quantity}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 0}
  },
  container: {
    marginBottom: 20,
    borderRadius: 4,
    backgroundColor: '#FFF',
    overflow: 'hidden'
  },
  info: {
    padding: 8
  },
  img: {
    height: 150,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4
  },
  name: {
    fontSize: 16,
    marginBottom: 8
  },
  priceRow: {
    marginRight: 15,
    fontSize: 30,
    flexDirection: 'row',
    alignItems: 'center'
  },
  price: {
    fontSize: 16,
    color: '#888',
    flex: 1
  }
});
