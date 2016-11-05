import React,{ Component } from 'react';
import {
  AppRegistry,
  MapView,
  View,
	TextView,
  StyleSheet
} from 'react-native';

var Weather = React.createClass({
  render: function(){
    return(
			<MapView
				onRegionChangeComplete={this.onRegionChangeComplete}
				style={styles.map}
				>
			</MapView>		
		); 
	},
	onRegionChangeComplete: function(region){
		console.log(region);
		// debugger;
	}
});

var styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

AppRegistry.registerComponent('jtweather',() => Weather);
