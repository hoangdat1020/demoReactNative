/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {TextInput} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {actAddToUser} from '../app/actions/index';
class Register extends React.Component {
  // eslint-disable-next-line react/sort-comp
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {name: '', password: ''};
  }

  navigateLogin = () => {
    this.props.navigation.navigate('Login');
  };

  render() {
    const {addToUser} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.vtext}>
          <Text style={styles.text}>REGISTER</Text>
        </View>
        <View style={styles.vinput}>
          <TextInput
            placeholder="sample@example.com"
            style={styles.input}
            onChangeText={name => this.setState({name})}
            value={this.state.name}
          />
          <TextInput
            placeholder="password"
            secureTextEntry
            style={styles.input}
            onChangeText={password => this.setState({password})}
            value={this.state.password}
          />
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            style={{
              backgroundColor: '#FFC209',
              borderRadius: 50,
              marginHorizontal: 20
            }}
            onPress={() => addToUser(this.state.name, this.state.password)}>
            <Text style={styles.actionText}> OK</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#FFC209',
              borderRadius: 50,
              marginHorizontal: 20,
              marginTop: 20
            }}
            onPress={() => this.navigateLogin()}>
            <Text style={styles.actionText}> LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user
  };
};
const mapEventToUser = dispatch => {
  return {
    addToUser: (username, password) => {
      dispatch(actAddToUser(username, password));
    }
  };
};

export default connect(mapStateToProps, mapEventToUser)(Register);
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  vtext: {
    position: 'absolute',
    top: '262@vs',
    width: '208@s',
    height: '52@vs'
  },
  text: {
    fontSize: '26@ms',
    lineHeight: '26@ms',
    textAlign: 'center',
    color: '#FFC209'
  },
  vinput: {
    position: 'absolute',
    top: '381@vs',
    marginLeft: '25@s',
    width: '325@s'
  },
  input: {
    borderBottomColor: '#C5C5C5',
    borderBottomWidth: 1,
    marginBottom: '34@vs'
  },
  button: {
    position: 'absolute',
    top: '531@vs',
    width: '232@s'
  },
  textBottom: {
    position: 'absolute',
    top: '589@vs',
    fontSize: '12@ms',
    lineHeight: '12@ms',
    textAlign: 'center',
    color: '#666666'
  },
  actionText: {
    padding: 5,
    fontSize: 30,
    color: 'white',
    textAlign: 'center'
  }
});
