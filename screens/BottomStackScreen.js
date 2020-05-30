import 'react-native-gesture-handler';
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen1 from './WelcomeScreen1'
import WelcomeScreen2 from './WelcomeScreen2'
import WelcomeScreen3 from './WelcomeScreen3'
import WelcomeScreen4 from './WelcomeScreen4'
import CustomIcon from '../components/CustomIcon'

export default function BottomStackScreen() {
  const Tab = createBottomTabNavigator();
  return (

    <Tab.Navigator
      initialRouteName="WelcomeScreen1"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Home"
        component={WelcomeScreen1}
        options={{
          tabBarIcon: () => (
            <CustomIcon
              name="chat"
            />
          )
        }}
      />
      <Tab.Screen
        name="Group"
        component={WelcomeScreen2}
        options={{
          tabBarIcon: () => (
            <CustomIcon
              name="alarm"

            />
          )
        }}
      />
      <Tab.Screen
        name="Center"
        component={WelcomeScreen3}
        options={{
          tabBarIcon: () => (
            <CustomIcon
              name="chat"


            />
          )
        }}
      />
      <Tab.Screen
        name="Alarm"
        component={WelcomeScreen4}
        options={{
          tabBarIcon: () => (
            <CustomIcon
              name="health"
            />
          )
        }}
      />
      <Tab.Screen
        name="Random"
        component={WelcomeScreen1}
        options={{
          tabBarIcon: () => (
            <CustomIcon
              name="alarm"

            />
          )
        }}
      />
    </Tab.Navigator>

  );
}

