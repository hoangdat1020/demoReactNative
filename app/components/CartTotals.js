import React, { Component } from 'react';
import {
    Image,
    Text,
    View,StyleSheet,TouchableOpacity,Alert
} from 'react-native';
import { formatPrice } from '../../utils/Number';

export default class CartTotals extends Component {


    render() {
        var s=0;
        const {products} = this.props;
        for( var i =0; i< products.length ;i++){
      
       s+= products[i].product.price *products[i].quantity;
        }
       
        return (
            <View style={{width:420,height:100,position:'relative'}}>
                <Text style={{
                    position:'absolute',
                    right:150,
                    fontSize:20,marginTop:10,marginLeft:10,textTransform:'uppercase'}}>TOTAL :{formatPrice(s)}</Text>
            </View>
        )
    }
}
