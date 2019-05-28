import React from 'react';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements';

import HardwareView from './components/HardwareView';
import HardwareDetailsView from './components/HardwareDetailsView';

import PaymentsView from './components/PaymentsView';
import DetailsScreen from './components/DetailsScreen';

const HardwareScreenStack = createStackNavigator({
  Hardware: HardwareView,
  HardwareDetails: HardwareDetailsView,
});

const PaymentsStack = createStackNavigator({
  Payments: PaymentsView
});


const Tabs = createBottomTabNavigator({
  Hardware: { 
    screen: HardwareScreenStack
  },
  Payments: { 
    screen: PaymentsStack 
  },
}, 
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      if (navigation.state.routeName == 'Hardware') {
        return <Icon name="home" size={25} color={tintColor} />;
      } else {
        return <Icon name="star" size={25} color={tintColor} />;
      }
    },
  }),
});

export default createAppContainer(Tabs);