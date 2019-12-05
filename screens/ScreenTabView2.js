/* eslint-disable react/destructuring-assignment */
import React, {Component} from 'react';
import {StyleSheet, View, FlatList, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import OrderList from '../app/components/OrderList';
import {actRemoveToOrder} from '../app/actions/index';

class ScreenTabView2 extends Component {
  removeAll = () => {
    this.props.removeAll();
  };

  render() {
    const product = this.props.order;
    const {navigation} = this.props;

    return (
      <View style={[styles.scene, {backgroundColor: '#ffffff'}]}>
        <FlatList
          data={product}
          contentContainerStyle={styles.container}
          renderItem={({item}) => (
            <View style={styles.wrapper}>
              <OrderList navigation={navigation} cart={item} />
            </View>
          )}
          keyExtractor={item => `${item.id}`}
        />
        <TouchableOpacity
          style={{
            backgroundColor: '#147efb',
            borderRadius: 20,
            marginHorizontal: 40,
            marginBottom: 20
          }}
          onPress={this.removeAll}>
          <Text style={styles.actionText}> REMOVE ALL</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  actionText: {
    textTransform: 'uppercase',
    padding: 5,
    fontSize: 30,
    color: 'white',
    textAlign: 'center'
  },
  scene: {
    flex: 1
  },
  container: {
    marginTop: 20,
    marginHorizontal: 16,
    borderRadius: 4,
    backgroundColor: '#FFF',
    overflow: 'hidden'
  }
});
const mapStateToProps = state => {
  return {
    order: state.order
  };
};
const mapEventToCart = dispatch => {
  return {
    removeAll: () => {
      dispatch(actRemoveToOrder());
    }
  };
};

export default connect(mapStateToProps, mapEventToCart)(ScreenTabView2);
