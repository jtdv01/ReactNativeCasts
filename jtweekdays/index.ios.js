var React = require('react');
var ReactNative = require('react-native');
var {
  AppRegistry,
  MapView,
  View,
  Text,
  StyleSheet
} = ReactNative;
var DayItem = require('./src/day-item');



var DAYS = ["Sunday","Monday"];


// Create a react component
var Weekdays = React.createClass({
  render: function(){
    return(
      <View>
        <Text style={styles.container}>
          Days of the Week:
        </Text>
        <DayItem day={DAYS[0]}/>
        <DayItem day={DAYS[1]}/>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

// Show the react component on the screen
AppRegistry.registerComponent('jtweekdays',function(){
  return Weekdays;
});
