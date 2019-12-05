/* eslint-disable react/sort-comp */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import CartList from '../app/components/CartList';
import CartTotals from '../app/components/CartTotals';
import {connect} from 'react-redux';
import {actAddToCart, actSubToCart, actRemoveAll} from '../app/actions/index';

class CartScreen extends React.Component {
  static navigationOptions = {
    title: 'Cart'
  };

  constructor(props) {
    super(props);
    this.state = {
      updateKey: null,
      product2: null
    };
  }

  componentDidMount() {
    this.setState({
      product2: this.props.cart
    });
  }

  refreshFlatList = updateRowKey => {
    this.setState(() => {
      return {
        updateKey: updateRowKey,
        product2: this.props.cart
      };
    });
  };

  render() {
    const product = this.props.cart;
    const {inCreToCart} = this.props;
    const {subToCart, removeAll} = this.props;
    const {navigation} = this.props;
    if (!this.state.product2) {
      return <View />;
    }
    return (
      <>
        <FlatList
          data={product}
          contentContainerStyle={styles.container}
          renderItem={({item}) => (
            <View style={styles.wrapper}>
              <CartList
                cart={item}
                inCreToCart={inCreToCart}
                subToCart={subToCart}
                navigation={navigation}
                parentFlatList={this}
              />
            </View>
          )}
          keyExtractor={item => `${item.product.id}`}
          extraData={this.props}
        />
        {product.length !== 0 && (
          <CartTotals
            removeAll={removeAll}
            navigation={navigation}
            products={product}
          />
        )}
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingTop: 16
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 8
  }
});
const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};
const mapEventToCart = dispatch => {
  return {
    inCreToCart: product => {
      dispatch(actAddToCart(product, 1));
    },
    subToCart: product => {
      dispatch(actSubToCart(product, 1));
    },
    removeAll: () => {
      dispatch(actRemoveAll());
    }
  };
};
export default connect(mapStateToProps, mapEventToCart)(CartScreen);
