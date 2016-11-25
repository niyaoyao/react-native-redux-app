import React, { Component } from 'react';
import { View, TouchableOpacity,Text } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from './constant-global-definition';

let lineHeight = 0.25;
let buttonHeight = 50;
let themeColor = '#fece56';
let grayLight = '#eee';
let grayMiddle = '#999';
let grayDark = '#666';
let fontColor = '#333';
let white = '#fff';

export class Line extends React.Component {
  static propTypes = {
    left: React.PropTypes.number.isRequired,
    top: React.PropTypes.number.isRequired,
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number,
    color: React.PropTypes.string,
  };
  static defaultProps = {
    left:0,
    top:0,
    width: SCREEN_WIDTH,
    height: lineHeight,
    color: grayLight,
  }
  render() {
    let { left, top, width, heihgt, color } = this.props;
    return(
      <View style={{height: lineHeight, backgroundColor: color, width: width, marginLeft: left, marginTop: top}} />
    );
  }
}

export class CommonButton extends React.Component {
  static propTypes = {
    left: React.PropTypes.number.isRequired,
    top: React.PropTypes.number.isRequired,
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number,
    title: React.PropTypes.string,
    titleColor: React.PropTypes.string,
    backgroundColor: React.PropTypes.string,
    cornerRadius: React.PropTypes.number,
  };
  static defaultProps = {
    left:0,
    top:0,
    width: SCREEN_WIDTH,
    buttonHeight: buttonHeight,
    title: 'Button Title',
    titleColor: white,
    backgroundColor: themeColor,
    buttonPressed: () => {console.log('pressed'); return;},
    cornerRadius: 5,
  }

  render() {
    padding = this.props.cornerRadius;
    var buttonStyle = {
      padding:padding,
      marginTop: this.props.top,
      marginLeft: this.props.left,
      width: this.props.width,
      height: this.props.buttonHeight,
      backgroundColor: this.props.backgroundColor,
      borderRadius : this.props.cornerRadius,
    };
    paddingEdge = 2 * padding;
    var textStyle = {
      width: this.props.width - paddingEdge,
      height: this.props.buttonHeight - paddingEdge,
      lineHeight: this.props.buttonHeight - paddingEdge,
      color: this.props.titleColor,
      textAlign: 'center',
      backgroundColor: this.props.backgroundColor,
    };

    return(
      <View style={buttonStyle}>
        <TouchableOpacity onPress={this.props.buttonPressed}>

          <Text style={textStyle}>{this.props.title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
