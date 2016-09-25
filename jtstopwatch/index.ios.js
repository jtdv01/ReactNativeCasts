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
  TouchableHighlight,
  View
} from 'react-native';

import convert from 'minutes-seconds-milliseconds';

/*
  When creating a class, its better to use the older js syntax
  - because we can use `this`
  - use of mixins
*/
var StopWatch = React.createClass({
  getInitialState: function(){
    return{
      timeElapsed: null,
      running: false,
      startTime: null,
      laps: []
    }
  },
  render: function(){
    return(
    <View style={styles.container}>
      <View style={[styles.header]}>
        <View style={[styles.timeWrapper]}>
          <Text style={styles.timer}>
           {convert(this.state.timeElapsed)}
          </Text>
        </View>

        <View style={[styles.buttonWrapper]}>
          {this.startStopButton()}
          {this.lapButton()}
        </View>
      </View>

      <View style={[styles.footer]}>
          {this.laps()}
      </View>
    </View>
    );
  },
  laps: function(){
    return this.state.laps.map(function(time,index){
      return(
        <View>
          <Text>
            Lap #{index + 1}
          </Text>
          <Text>
            {convert(time)}
          </Text>
        </View>
      );
    });
  },
  startStopButton: function(){
      var style = this.state.running ? styles.stopButton : styles.startButton;
      return(
      <TouchableHighlight
        underlayColor="gray"
        onPress={this.handleStartPress}
        style={[styles.button,style]}
        >
        <Text>
          {this.state.running ? 'Stop' : 'Start'}
        </Text>
      </TouchableHighlight>
    );
  },
  lapButton: function(){
      return(
      <TouchableHighlight
        style={styles.button}
        underlayColor="gray"
        onPress={this.handleLapPress}
        >

        <Text>
          Lap.
        </Text>
      </TouchableHighlight>
    );
  },
  handleLapPress: function(){
    var lap = this.state.timeElapsed;
    // Never modify the state using push!
    // concat is safer, which is like functional,
    // returns a new array
    this.setState({
      startTime: new Date(),
      laps: this.state.laps.concat([lap])
    });
  },
  handleStartPress: function(){
    if(this.state.running){
      clearInterval(this.interval);
      this.setState({running:false});
      return;
    }

    var startTime = new Date();
    this.setState({startTime: new Date()});

    // StandardJS library call
    // call the function every 30ms
    // new Date gets time elapsed
    // but startTime stays the same!
    this.interval = setInterval(() => {
      this.setState({
        timeElapsed: new Date() - this.state.startTime,
        running: true
      });
    }, 30);

    // var x = 1;
    // debugger;
    // console.log("foo!");
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
  },
  timeWrapper: {
    flex:5,
    flexDirection:"row",
    alignItems:'center',
    justifyContent:"space-around"
  },
  buttonWrapper: {
    flex:3,
    flexDirection:"row",
    justifyContent:'space-around',
    alignItems:'center'
  },
  timer: {
    fontSize:60
  },
  button:{
    borderWidth:2,
    height:100,
    width:100,
    borderRadius:50,
    justifyContent:"center",
    alignItems:'center'
  },
  startButton:{
    borderColor:'#00CC00'
  },
  stopButton:{
    borderColor:'#CC0000'
  }
});
/*
Timewrapper takes up 5/8ths of the available space
Button wrapper takes 3/8ths
*/


AppRegistry.registerComponent('jtstopwatch', () => StopWatch);
