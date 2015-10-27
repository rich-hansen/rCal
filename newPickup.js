'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
} = React;

var Button = require('react-native-button');

var NewPickupView = React.createClass({
  getInitialState: function() {
    return {
      who: 'green'
    };
  },

  render() {
    return (
        <View style={styles.container}>
          <Text>
            Who:
          </Text>
          <TextInput
              style={{height: 40, borderColor: 'grey', borderWidth: 1}}
              //defaultValue={pickupData.who}
              onChange={(event) => this._updateText(event.nativeEvent.text)}
              value={this.state.who}
          />
          <Text>
            Creating New Pickup Here!
          </Text>
        </View>
    );
  },

  _updateText(newText) {
    console.log('hi my update is ', newText);
    this.setState({ who: newText });
  },

  _handleReminder() {
    console.log('I want to create a new reminder');
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20
  },
  button: {
    borderWidth: 1,
    height: 40,
    width: 130,
    paddingTop: 8,
    margin: 10,
    color: 'white',
    borderRadius: 10
  },
  blue: {
    borderColor: 'blue',
    backgroundColor: 'blue'
  },
  green: {
    borderColor: 'green',
    backgroundColor: 'green'
  }
});

module.exports = NewPickupView;