var ReactNative = require('react-native');
var React = require('react');

var Text = ReactNative.Text;
var StyleSheet = ReactNative.StyleSheet;

var DayItem = React.createClass({
  render: function(){
    return(
      <Text style={styles.day}>
        {this.props.day}
      </Text>
    );
  }
});

var styles = StyleSheet.create({
  day: {
    fontSize: 18,
    color: "#0000FF"
  }
});

module.exports= DayItem;
