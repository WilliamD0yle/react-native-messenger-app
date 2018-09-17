import React, { Component } from "react";
import { StyleSheet } from 'react-native';
import { connect } from "react-redux";
import {
  Header,
  Left,
  Right,
  Body
} from "native-base";

export default class HeaderComponent extends Component {
  // passed properties are displayed within the Header
  // pass in properties for the left, body and right segments
  render() {
    return (
      <Header
        style={styles.header}
      >
        <Left>
          {this.props.left}
        </Left>

        <Body>
          {this.props.body}
        </Body>

        <Right>
          {this.props.right}
        </Right>
      </Header>
    );
  }
}

const styles = {
  header: {
    backgroundColor: "rgb(255, 255, 255)",
    borderBottomWidth: 0.2,
    borderBottomColor: 'rgba(68, 68, 68, 0.55)'
  }
};
