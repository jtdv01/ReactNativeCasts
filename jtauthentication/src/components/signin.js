import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';


module.exports = React.createClass({
  render: function(){
    return(
      <View style={styles.container}>
        <Text style={styles.label}>Sign in</Text>
        <Text>Username</Text>
        <TextInput style={styles.input} />
        <Text>Password</Text>
        <TextInput secureTextEntry={true} style={styles.input} />
      </View>
    )
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 200,
    alignSelf: 'center'
  },
  label: {
    fontSize: 10
  }
});
