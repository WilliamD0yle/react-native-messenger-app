import { AsyncStorage } from "react-native";
import firebase from '../Config/firebase';

export const appInnit = user => {
  return dispatch => {
    dispatch({
      type: 'APP_INNIT',
      payload: user
    });
  };
};

export const startLogin = (name, avatar) => {
  return dispatch => {
    firebase.auth().signInAnonymously().then((data) => {
      const contact = { name, avatar, uid: data.user.uid };
      AsyncStorage.setItem('user', JSON.stringify(contact));

      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          firebase.database().ref(`users/${contact.uid}`).set(contact);
        }
      });

      dispatch({
        type: 'LOGIN_USER',
        payload: contact
      });
    });
  };
}
