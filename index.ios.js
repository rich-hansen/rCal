/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var Button = require('react-native-button');

var rCal = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
              style={[styles.button, styles.blue]}
              onPress={this._handlePickup}>
            new Pickup
          </Button>
          <Button
              style={[styles.button, styles.green]}
              onPress={this._handleReminder}>
            new Reminder
          </Button>
        </View>
      </View>
    );
  },

  _handlePickup: function () {
    console.log('I want to create a new pickup');
  },

  _handleReminder: function () {
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

AppRegistry.registerComponent('rCal', () => rCal);
