import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import Signin from './components/signin';

module.exports = React.createClass({
  render: function(){
    return (
      <View style={styles.container}>
        
        <Signin />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
