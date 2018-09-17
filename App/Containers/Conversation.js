import React, { Component } from "react";
import { GiftedChat } from 'react-native-gifted-chat'
import { Image, FlatList, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import Entypo from 'react-native-vector-icons/dist/Entypo';
import { Container, Title, Body } from "native-base";
import Header from "../Components/Header";

const Conversation = props => (
  <Container
    style={{ backgroundColor: "rgb(237, 237, 237)"}}
  >
    <Header
      left={
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Entypo name={'chevron-thin-left'} size={25} color={"tomato"}/>
        </TouchableOpacity>
      }
      body={
        <Title
          style={{ color: "tomato" }}
        >
          {props.userName}
        </Title>
      }
    />
    <GiftedChat
      messages={props.chat}
      onSend={messages => props.onSend(messages)}
      user={{ _id: props.myID }}
    />
  </Container>
)

const mapStateToProps = (state) => ({
  chat: state.messages.selectedChat ? state.messages.chats[state.messages.selectedChat] : [],
  myID: state.user.uid,
  userName: state.messages.selectedUser ? state.messages.selectedUser.name : null
});

const mapDispatchToProps = (dispatch, props) => ({
	onSend: text => dispatch(acceptConferenceCall())
});

export default connect(mapStateToProps, {})(Conversation);
