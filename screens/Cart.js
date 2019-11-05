import React from "react";
import { Text, FlatList, StyleSheet, View, ScrollView } from "react-native";
import CartList from "../app/components/CartList";
import CartTotals from "../app/components/CartTotals";
import { connect } from "react-redux";
import { actAddToCart,actSubToCart } from "./../app/actions/index";


class CartScreen extends React.Component {
  static navigationOptions = {
    title: "Cart"
  };

  render() {
    var product = this.props.cart;
    const { inCreToCart } = this.props;
    const { subToCart } = this.props;

    return (
      <>
       
          <FlatList
            data={product}
            contentContainerStyle={styles.container}
            renderItem={({ item }) => (
              <View style={styles.wrapper}>
                <CartList
                  cart={item}
                  inCreToCart={inCreToCart}
                  subToCart={subToCart}
                />
              </View>
            )}
            keyExtractor={item => `${item.id}`}
          />
    

        {product.length !== 0 && <CartTotals products={product} />}
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
const mapEventToCart = (dispatch, props) => {
  return {
    inCreToCart: product => {
      dispatch(actAddToCart(product, 1));
    },
    subToCart: product => {
      dispatch(actSubToCart(product, 1));
    }
  };
};
export default connect(
  mapStateToProps,
  mapEventToCart
  // ,mapSubToCart
)(CartScreen);
