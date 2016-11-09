import React,{ Component } from 'react';
import {
  AppRegistry, MapView,
  View,
	TextView,
  StyleSheet
} from 'react-native';
var Api = require('./src/api');

var Weather = React.createClass({
	getInitialState: function(){
		return {
			pin: {
				longitude: 0 ,
				latitude: 0
			},
      city:'',
      temeprature:'',
      description:''
		};
	},
  render: function(){
 		var pins = [
		{
			latitude: 37,
			longitude: -95
		}
		];

		return(
			<MapView
				annotations={[this.state.pin]}
				onRegionChangeComplete={this.onRegionChangeComplete}
				style={styles.map}
				>
			</MapView>
		);
	},
	onRegionChangeComplete: function(region){
		this.setState({
			pin: {
				longitude: region.longitude,
				latitude: region.latitude
			}
		});

    Api(region.latitude,region.longitude)
      .then((data) => {
        console.log(data);
        // Set state is always additive, even though its a whole
        // object, it just adds extra infomration to the existing state
        // Fat arrow is needed so this is the compnoent outside the function
        this.setState(data);
      });
	}
});

var styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

AppRegistry.registerComponent('jtweather',() => Weather);
