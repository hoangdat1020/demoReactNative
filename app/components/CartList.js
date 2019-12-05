/* eslint-disable react-native/no-unused-styles */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {formatPrice} from '../../utils/Number';
import Swiper from 'react-native-swiper';
import FastImage from 'react-native-fast-image';
export default class CartList extends Component {
  constructor(props) {
    super(props);
  }

  refreshFlatList = () => {
    this.props.parentFlatList.refreshFlatList(this.props.cart.length);
  };

  inCreToCart = () => {
    this.props.inCreToCart(this.props.cart.product);
  };

  doubleTask = () => {
    this.refreshFlatList();
    this.inCreToCart();
  };

  render() {
    const {cart, subToCart, navigation} = this.props;
    console.log('cart', cart);
    if (!cart) {
      return <View />;
    }
    return (
      <View style={styles.shadow}>
        <View style={styles.container}>
          <View style={styles.test}>
            {cart.product.images[0].url && (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Details', {
                    title: cart.product.name,
                    id: cart.product.id,
                    product: cart.product
                  })
                }>
                {cart.product.images[0].url && (
                  <Swiper
                    showsButtons
                    style={styles.swiper}
                    dot={
                      <View
                        style={{
                          backgroundColor: 'rgba(0,0,0,.2)',
                          width: 8,
                          height: 8,
                          borderRadius: 4,
                          marginLeft: 3,
                          marginRight: 3,
                          marginTop: 3,
                          marginBottom: 3
                        }}
                      />
                    }>
                    <FastImage
                      style={styles.img}
                      source={{
                        uri: cart.product.images[0].url,
                        headers: {Authorization: 'someAuthToken'},
                        priority: FastImage.priority.normal
                      }}
                      resizeMode={FastImage.resizeMode.contain}
                    />
                    <FastImage
                      style={styles.img}
                      source={{
                        uri: cart.product.images[0].url,
                        headers: {Authorization: 'someAuthToken'},
                        priority: FastImage.priority.normal
                      }}
                      resizeMode={FastImage.resizeMode.contain}
                    />
                    <FastImage
                      style={styles.img}
                      source={{
                        uri: cart.product.images[0].url,
                        headers: {Authorization: 'someAuthToken'},
                        priority: FastImage.priority.normal
                      }}
                      resizeMode={FastImage.resizeMode.contain}
                    />
                    <FastImage
                      style={styles.img}
                      source={{
                        uri: cart.product.images[0].url,
                        headers: {Authorization: 'someAuthToken'},
                        priority: FastImage.priority.normal
                      }}
                      resizeMode={FastImage.resizeMode.contain}
                    />
                  </Swiper>
                )}
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.info}>
            <Text style={styles.name}>{cart.product.name}</Text>
            <View style={styles.priceRow}>
              <Text style={styles.price}>
                {formatPrice(cart.product.price * cart.quantity)}
              </Text>
              <TouchableOpacity onPress={this.doubleTask}>
                <Text style={{fontSize: 20}}>+ </Text>
              </TouchableOpacity>
              <Text style={{fontSize: 20}}> {cart.quantity}</Text>
              <TouchableOpacity onPress={() => subToCart(cart.product)}>
                <Text style={{fontSize: 20}}> -</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  swiper: {
    height: 240,
    position: 'relative'
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
    marginTop: 10,
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
