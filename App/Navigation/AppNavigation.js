import React from "react";
import { TabNavigator, TabBarBottom, StackNavigator, SwitchNavigator } from "react-navigation";
import Ionicons from 'react-native-vector-icons/Ionicons';
// screens identified by the router
import AuthLoadingScreen from '../Containers/AuthLoadingScreen';
import Login from '../Containers/Login';
import Contacts from '../Containers/Contacts';
import Conversation from '../Containers/Conversation';

const AppStack = StackNavigator(
	{
		Contacts: { screen: Contacts },
		Conversation: { screen: Conversation },
	},
	{
		headerMode: 'none'
	}
	// {
	//     navigationOptions: ({ navigation }) => ({
	//       tabBarIcon: ({ focused, tintColor }) => {
	//         const { routeName } = navigation.state;
	//         let iconName;
	//         if (routeName === 'Contacts') {
	//           iconName = `ios-contact${focused ? '' : '-outline'}`;
	//         } else if (routeName === 'Messages') {
	//           iconName = `ios-options${focused ? '' : '-outline'}`;
	//         }
	//         return <Ionicons name={iconName} size={25} color={tintColor} />;
	//       },
	//     }),
	//     tabBarOptions: {
	//       activeTintColor: 'tomato',
	//       inactiveTintColor: 'gray',
	//     },
	//     tabBarComponent: TabBarBottom,
	//     tabBarPosition: 'bottom',
	//     animationEnabled: false,
	//     swipeEnabled: false,
	//   }
);

const AuthStack = StackNavigator(
	{
		SignIn: Login
	},
	{
		headerMode: 'none'
	}
);

export default SwitchNavigator(
  {
		AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading'
  }
);
