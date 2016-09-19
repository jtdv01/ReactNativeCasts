var ReactNative = require('react-native');
var React = require('react');

var Text = ReactNative.Text;
var StyleSheet = ReactNative.StyleSheet;

var DayItem = React.createClass({
  render: function(){
    return(
      <Text style={this.style()}>
        {this.props.day}
      </Text>
    );
  },
  style: function(){
    return{
        color:this.color(),
        // fontWeight: this.fontWeight(), <-- problem here
        fontSize:this.fontSize(),
        lineHeight:this.lineHeight()
    };
  },
  color: function(){
    var opacity = 1 / this.props.daysUntil;
    if(this.props.daysUntil == 0){
      opacity = 1
    }
    return 'rgba(0,0,0,'+ opacity + ')';
  },
  fontWeight: function(){
    var weight = 7 - this.props.daysUntil;
    return weight * 100;
  },
  fontSize: function(){
    return 60 - 6 * this.props.daysUntil;
  },
  lineHeight: function(){
    return 70 - 4 * this.props.daysUntil;
  }
});

// var styles = StyleSheet.create({
//   day: {
//     fontSize: 18,
//     color: "#0000FF"
//   }
// });

module.exports= DayItem;
