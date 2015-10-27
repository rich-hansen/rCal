/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Navigator,
} = React;

var Button = require('react-native-button');
var StatusView = require('./status');

var rCal = React.createClass({
  render() {
    return (
      <Navigator
        initialRoute={{ name: 'StatusView', component: StatusView}}
        configureScene={() => {
          return Navigator.SceneConfigs.FloatFromRight;
        }}
        renderScene={(route, navigator) => {
          if (route.component) {
            return React.createElement(route.component, { navigator });
          }
        }}
      />
    );
  }
});

AppRegistry.registerComponent('rCal', () => rCal);
