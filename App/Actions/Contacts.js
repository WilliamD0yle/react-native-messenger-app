import { AsyncStorage } from "react-native";
import firebase from '../Config/firebase';

export const fetchContacts = () => {
  return dispatch => {
    firebase.database().ref('/users').once('value').then((snapshot) => {
      dispatch({
        type: 'LOAD_CONTACTS',
        payload: Object.values(snapshot.val())
      });
    });
  }
}

export const fetchContactMessages = (uid, user) => {
  return dispatch => {
    const path = user.uid > uid ? `${user.uid}_${uid}` : `${uid}_${user.uid}`;
    firebase.database().ref(`/chatrooms/${path}`).once('value').then(snapshot => {
      dispatch({
        type: 'LOAD_CONVERSATION',
        payload: snapshot.val() ?
          {
            id: path,
            messages: Object.values(snapshot.val()),
            selectedUser: user
          } :
          {
            id: path,
            messages: [],
            selectedUser: user
          }
      });
    });
  }
}

export const sendMessage = (text, uid) => {
  return dispatch => {
  const message = {
      text: 'Hello developer',
      createdAt: new Date(),
      user: {
        uid,
        avatar: 'https://placeimg.com/140/140/any'
      }
    };
  }
}
