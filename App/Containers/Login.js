import React, { Component } from "react";
import { Image, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { connect } from "react-redux";
import { Container, Content, Button, Item, Input, } from "native-base";
import { startLogin } from "../Actions/Auth";
import Images from "../Themes/Images";

class Example1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      avatar: null,
      error: false
    };
  }

  _signInAsync = async () => {
    !this.state.name || !this.state.avatar ? this.setState({error: true}) : this.setState({error: false});
    this.props.startLogin(this.state.name, this.state.avatar);
    // this.props.login(this.state.name, this.state.avatar).then(() => { this.props.navigation.navigate('App') };
  };

  render() {
    return (
      <Container
        style={styles.container}
      >
        <Content contentContainerStyle={styles.content}>
          <KeyboardAvoidingView behavior="padding" style={styles.KeyboardAvoidingView}>
            <TextInput
              style = {styles.input}
              autoCapitalize="none"
              onChangeText={(name) => this.setState({name})}
              onSubmitEditing={() => this.avatar.focus()}
              autoCorrect={false}
              placeholder='Name'
              placeholderTextColor='rgba(225,225,225,0.7)'
            />
            <TextInput
              ref={(input) => { this.avatar = input; }}
              style = {styles.input}
              autoCapitalize="none"
              onChangeText={(avatar) => this.setState({avatar})}
              onSubmitEditing={this._signInAsync}
              autoCorrect={false}
              placeholder='Avatar url'
              placeholderTextColor='rgba(225,225,225,0.7)'
            />
            { this.state.error ? <Text style={styles.buttonText}>Please Add a {!this.state.name ? 'name' : 'avatar url' }</Text> : null }
            <TouchableOpacity style={styles.buttonContainer} onPress={this._signInAsync}>
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
         </KeyboardAvoidingView>
        </Content>
      </Container>
    );
  }
}

const styles = {
  container: {
    backgroundColor: '#2c3e50',
    flex: 1,
    flexDirection: 'row'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  KeyboardAvoidingView: {
    padding: 20
  },
  input:{
    height: 40,
    minWidth: 250,
    backgroundColor: 'rgba(225,225,225,0.2)',
    marginBottom: 10,
    padding: 10,
    color: '#fff'
  },
  buttonContainer:{
    backgroundColor: '#2980b6',
    paddingVertical: 15
  },
  buttonText:{
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
  }
}

const mapStateToProps = (state, props) => ({
	user: state.user
});

const mapDispatchToProps = (dispatch, props) => ({
	startLogin: (name ,avatar) => dispatch(startLogin(name ,avatar)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Example1);
