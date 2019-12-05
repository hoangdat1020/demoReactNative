/* eslint-disable react/destructuring-assignment */
import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {formatPrice} from '../../utils/Number';
export default class ProductListItem extends Component {
  likeProduct = () => {
    this.props.likeProduct(this.props.product);
  };

  addToCart = () => {
    this.props.addToCart(this.props.product);
  };

  render() {
    const {product, onPress} = this.props;
    return (
      <View style={styles.shadow}>
        <View style={styles.container}>
          <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            <Image style={styles.img} source={{uri: product.images[0].url}} />
          </TouchableOpacity>
          <View style={styles.info}>
            <Text style={styles.name}>{product.name}</Text>
            <View style={styles.priceRow}>
              <Text style={styles.price}>{formatPrice(product.price)}</Text>
              <TouchableOpacity onPress={this.likeProduct}>
                <Text style={styles.cartText}>
                  {product.state ? 'unlike ' : 'like '}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.addToCart}>
                <Text style={styles.cartText}>MUA +</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cartText: {
    textTransform: 'uppercase',
    fontSize: 16,
    color: '#2f95dc'
  },
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
    flexDirection: 'row',
    alignItems: 'center'
  },
  price: {
    fontSize: 16,
    color: '#888',
    flex: 1
  }
});
