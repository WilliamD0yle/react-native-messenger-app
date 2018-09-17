import React, { Component } from "react";
import { Image, FlatList, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import Entypo from 'react-native-vector-icons/dist/Entypo';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import { Container, Title, Content, Text, Button, Left, Body, Right } from "native-base";
import Header from "../Components/Header";
import { fetchContacts, fetchContactMessages } from "../Actions/Contacts";

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.props.fetchContacts();
  }

  loadConversation(user) {
    const { navigate } = this.props.navigation;
    return new Promise((resolve, reject) => {
      resolve(this.props.fetchContactMessages(this.props.meUID, user));
    }).then(() => {navigate('Conversation')});
  }

  renderContactRow(user) {
    return (
      <TouchableOpacity
        onPress={() => this.loadConversation(user)}
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', borderBottomColor: 'rgba(255, 99, 71, 0.2)', borderBottomWidth: .5 }}
      >
        <View style={{ flexDirection: 'row', margin: 10 }}>
          <Left style={{ flex: 1 }}>
            <Image
              style={{ flex: 1, height: 50, width: 50, borderRadius: 25 }}
              resizeMode='cover'
              source={{ uri: user.avatar }}
            />
          </Left>
          <Body style={{ flex: 3, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{user.name}</Text>
            <Text style={{ fontSize: 14 }}>example most recent message</Text>
          </Body>
          <Right style={{ flex: 1 }}>
            <Text style={{ fontSize: 12, color: 'rgba(255, 99, 71, 0.8)' }}>Sat</Text>
            <MaterialIcons name={'check'} size={20} color={"tomato"}/>
          </Right>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <Container
        style={{ backgroundColor: "rgb(237, 237, 237)"}}
      >
        <Header
          body={
            <Title
              style={{ color: "tomato" }}
            >
              Messages
            </Title>
          }
        />
        <Content>
          <FlatList
            data={this.props.contacts}
            renderItem={({item}) => item.uid !== this.props.meUID ? this.renderContactRow(item) : null}
          />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  meUID: state.user.uid,
  contacts: state.contacts,
  selectedUser: state.messages.selectedUser || null
});

const mapDispatchToProps = (dispatch, props) => ({
	fetchContacts: () => dispatch(fetchContacts()),
  fetchContactMessages: (myID, uid) => {dispatch(fetchContactMessages(myID, uid))}
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
