import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {formatPrice} from '../../utils/Number';
import {connect} from 'react-redux';
import {actAddToCart} from '../actions/index';

class DetailsItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  decrementCount = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    const {product} = this.props;
    const {inCreToCart} = this.props;

    return (
      <View style={styles.shadow}>
        <View style={styles.container}>
          <View style={styles.test}>
            <Image style={styles.img} source={{uri: product.images[0].url}} />
          </View>

          <View style={styles.info}>
            <Text style={styles.name}>{product.name}</Text>
            <View style={styles.priceRow}>
              {this.state.count ? (
                <Text style={styles.price}>
                  {formatPrice(product.price * this.state.count)}
                </Text>
              ) : (
                <Text style={styles.price}>{formatPrice(product.price)}</Text>
              )}

              <TouchableOpacity onPress={this.incrementCount}>
                <Text style={{fontSize: 20}}>+ </Text>
              </TouchableOpacity>
              <Text style={{fontSize: 20}}>
                {' '}
                {this.state.count >= 0 ? this.state.count : 0}
              </Text>
              <TouchableOpacity onPress={this.decrementCount}>
                <Text style={{fontSize: 20}}> -</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: '#147efb',
            borderRadius: 20,
            marginHorizontal: 40,
          }}
          onPress={() => inCreToCart(product, this.state.count)}>
          <Text style={styles.actionText}> Mua ngay</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};
const mapEventToCart = (dispatch, props) => {
  return {
    inCreToCart: (product, count) => {
      dispatch(actAddToCart(product, count));
    },
  };
};

export default connect(
  mapStateToProps,
  mapEventToCart,
)(DetailsItem);

const styles = StyleSheet.create({
  actionText: {
    textTransform: 'uppercase',
    padding: 5,
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
  cartText: {
    textTransform: 'uppercase',
    fontSize: 16,
    color: '#2f95dc',
  },
  shadow: {
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 0},
  },
  container: {
    marginHorizontal: 16,
    marginVertical: 16,
    borderRadius: 4,
    backgroundColor: '#FFF',
    overflow: 'hidden',
  },

  info: {
    padding: 8,
  },
  img: {
    height: 150,

    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  name: {
    fontSize: 16,
    marginBottom: 8,
  },
  priceRow: {
    marginRight: 15,
    fontSize: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 16,
    color: '#888',
    flex: 1,
  },
});

