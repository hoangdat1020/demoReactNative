import React, {Component} from 'react';
import {Text, StyleSheet, FlatList, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import styled from 'styled-components';

const color = {
  ACTIVE: '#147efb',
  INACTIVE: '#ccc',
};
class CartIcon extends Component {
  render() {
    const {cart, tintColor} = this.props;
    const number = getNumber(cart);

    return (
      <>
        <TextIcons style={styles.cartIcon}>
          <Icon name="ios-cart" size={25} color={tintColor} />
        </TextIcons>
        {number > 0 && (
          <View
            style={{
              width: 20,
              height: 20,
              backgroundColor: '#147efb',
              position: 'relative',
              top: -10,
              right: -15,
              borderRadius: 10,
            }}>
            <Text style={{color: 'white', margin: 2}}> {number}</Text>
          </View>
        )}
      </>
    );
  }
}
var getNumber = cart => {
  var s = 0;
  for (var i = 0; i < cart.length; i++) {
    s += cart[i].quantity;
  }
  return s;
};

const mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};
const styles = StyleSheet.create({
  cartIcon: {
    position: 'absolute',
  },
});
const TextIcons = styled.Text`
  &:focus {
    color: '#147efb';
  }
`;
export default connect(
  mapStateToProps,
  null,
)(CartIcon);
