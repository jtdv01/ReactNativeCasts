/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

/*
  When creating a class, its better to use the older js syntax
  - because we can use `this`
  - use of mixins
*/
var StopWatch = React.createClass({
  render: function(){
    return(
    <View style={styles.container}>
      <View style={[styles.header,this.border('yellow')]}>
        <Text style={this.border('red')}>
           00.00.00
        </Text>

        <View style={this.border('green')}>
          {this.startStopButton()}
          {this.lapButton()}
        </View>
      </View>

      <View style={[styles.footer,this.border('blue')]}>
        <Text>
          I am list of laps
        </Text>
      </View>
    </View>
    );
  },
  startStopButton: function(){
      return(
      <View>
        <Text>
          Start stop
        </Text>
      </View>
    );
  },
  lapButton: function(){
      return(
      <View>
        <Text>
          Lap
        </Text>
      </View>
    );
  },
  border: function(color){
    return{
      borderColor: color,
      borderWidth: 4
    };
  }
});

const styles = StyleSheet.create({
  // allign item strethc from left to write
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  header:{
    flex:1
  },
  footer:{
    flex:1
  }
});

AppRegistry.registerComponent('jtstopwatch', () => StopWatch);
