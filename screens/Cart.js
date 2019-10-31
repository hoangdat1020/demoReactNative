import React from "react";
import { Text, FlatList, StyleSheet, View } from "react-native";
import CartList from "../app/components/CartList";
import CartTotals from "../app/components/CartTotals";
import { connect } from "react-redux";

class CartScreen extends React.Component {
  static navigationOptions = {
    title: "Cart"
  };

  render() {
    var product = this.props.cart;

    return (
      <FlatList
        data={product}
        contentContainerStyle={styles.container}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.wrapper}>
            <CartList cart={item} />
          </View>
        )}
        keyExtractor={item => `${item.id}`}
      />
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
export default connect(
  mapStateToProps,
  null
)(CartScreen);
