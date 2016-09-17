var React = require('react');
var ReactNative = require('react-native');
var {
  AppRegistry,
  MapView,
  View,
  Text,
  StyleSheet
} = ReactNative;
var Moment = require('moment');
var DayItem = require('./src/day-item');




// Create a react component
var Weekdays = React.createClass({
  render: function(){
    return(
      <View  style={styles.container}>
        <Text>
          Days of the Week:
        </Text>
        {this.renderDays()}

      </View>
    );
  },
  renderDays: function(){
    // var DAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    // Creating it dynamically
    var daysItems =[]
    for(var i=0; i< 7; i++){
      var day = Moment().add(i,'days').format('dddd'); // add i amnt of days
      daysItems.push(<DayItem day={day} daysUntil={i} />);
    }

    return daysItems;
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
