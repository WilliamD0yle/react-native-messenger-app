import React from "react";
import { StackNavigator } from "react-navigation";
// screens identified by the router
import NavigationDrawer from "./NavigationDrawer";
import Example1 from '../Containers/Example1';
import Example2 from '../Containers/Example2';

// declare app screens within the application
// all screens are declared here
const PrimaryNav = StackNavigator(
	{
		NavigationDrawer: {
			screen: NavigationDrawer
		},
		Example1: {
			screen: Example1
		},
		Example2: {
			screen: Example2
		},
	},
	{
		initialRouteName: "NavigationDrawer",
		headerMode: 'none',
	}
);

export default PrimaryNav;
