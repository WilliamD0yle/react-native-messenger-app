import React from "react";
import { DrawerNavigator } from "react-navigation";
import Example1 from '../Containers/Example1';
import Example2 from '../Containers/Example2';
import DrawerContent from "../Containers/DrawerContent";

// declare icons for the app screens
const icons = {
  Example1: 'thumbs-o-up',
  Example2: 'thumbs-o-down'
};

// create drawer stack to be displayed within the navigation drawer
// only screens to be linked in the navigation drawer are declared here
const NavigationDrawer = DrawerNavigator({
  Example1: {
    screen: Example1
  },
  Example2: {
    screen: Example2
  },
},
	{
		initialRouteName: "Example1",
		contentComponent: props => <DrawerContent {...props} icons={icons} />,
	}
);

export default NavigationDrawer;
