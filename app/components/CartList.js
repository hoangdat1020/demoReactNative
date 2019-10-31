import React, { Component } from 'react'
import { Text,StyleSheet,FlatList,View,Image} from 'react-native';
import { formatPrice } from '../../utils/Number';

export default class CartList extends Component {


    render() {
        const {cart}=this.props;
       // console.log(cart);
        return (
            <View style={styles.shadow}>
            <View style={styles.container}>
              <Image style={styles.img} source={{ uri: cart.product.images[0].url }} />
              <View style={styles.info}>
                <Text style={styles.name}>{cart.product.name}</Text>
                <View style={styles.priceRow}>
                  <Text style={styles.price}>{formatPrice(cart.product.price)}</Text>
                  <Text > Quantity : {cart.quantity}</Text>
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
      shadowOffset: { width: 0, height: 0 }
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
