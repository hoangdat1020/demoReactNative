import React from 'react'
import {StyleSheet,View,Text,FlatList} from 'react-native';
import ProductListItem from '../app/components/ProductListItem';
import {connect} from 'react-redux';
import {actAddToCart} from './../app/actions/index';

class Category extends React.Component {
    static navigationOptions=({navigation})=>{
        return {
 title: navigation.getParam('title')
        };
    };
    constructor(props){
      super(props);
      this.state={
        products:[]
      }
    }

   componentDidMount() {
    const { navigation } = this.props;
    const id = navigation.getParam('id');

    try {
      const arr = this.props.products.filter((item) => {
            return item.category === id
         });
         
      this.setState({
        products: [...arr]
      });
    } catch (error) {
      console.log(error);
    }
  }


    render() {
    const {onAddToCart}= this.props;
    console.log(onAddToCart);
        return (
            <FlatList
            data={this.state.products}
            contentContainerStyle={styles.container}
            numColumns={2}
            renderItem={({ item }) =>
              <View style={styles.wrapper}>
                <ProductListItem product={item} 
                 addToCart={onAddToCart}
                />
              </View>
            }
            keyExtractor={(item) => `${item.id}`} />
        );
    }
}

const styles = StyleSheet.create({
    container: {
 paddingHorizontal:8,
 paddingTop:16
    },
    wrapper:{
        flex:1,
        paddingHorizontal:8
    }
  });
  const mapStateToProps=state=>{
    return {
      products: state.products
    }
  }
  const mapAddToCart=(dispatch,props)=>{
    return {
      onAddToCart: (product) =>{
        dispatch(actAddToCart(product,1));
      }
    }
  }
  export default connect(mapStateToProps,mapAddToCart)(Category);