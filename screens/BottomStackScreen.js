import 'react-native-gesture-handler';
import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen1 from './WelcomeScreen1'
import WelcomeScreen2 from './WelcomeScreen2'
import WelcomeScreen3 from './WelcomeScreen3'
import WelcomeScreen4 from './WelcomeScreen4'
import CustomIcon from '../components/CustomIcon'
import { MultiBarButton } from 'react-native-multibar';
import Icons from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/MaterialIcons'
import PlusIcon from 'react-native-vector-icons/Entypo'

export default function BottomStackScreen() {
  const Tab = createBottomTabNavigator();
  return (

    <Tab.Navigator
      initialRouteName="WelcomeScreen1"
      tabBarOptions={{
        activeTintColor: '#096482',
        inactiveTintColor: '#8a919c',
        style:{height : 60}
      }}
     
    >
      <Tab.Screen
        name="Home"
        component={WelcomeScreen1}
        options={{
          tabBarIcon: (size, color) => (
            <Icons
            name = "home"
            size = {38}
            color = "#4dbbfa"
            />
          )
        }}
      />
      <Tab.Screen
        name="Group"
        component={WelcomeScreen2}
        options={{
          tabBarIcon: () => (
           <Icon
           name= "sms"
           size = {38}
           color = "#4dbbfa"
           />
          )
        }}
      />
      <Tab.Screen
        name="Center"
        component={WelcomeScreen3}
        options={{
          tabBarButton: () => (
            <MultiBarButton
            >
              <PlusIcon
                name = "plus"
                
                size = {50}
                color = "#4dbbfa"
              />
            </MultiBarButton>
          )
        }}
      />
      <Tab.Screen
        name="Alarm"
        component={WelcomeScreen4}
        options={{
          tabBarIcon: () => (
            <Icon
            name = "notifications"
            size = {38}
            color = "#4dbbfa"
            />
          )
        }}
      />
      <Tab.Screen
        name="Random"
        component={WelcomeScreen1}
        options={{
          tabBarIcon: () => (
            <Icon
            name = "pets"
            size = {38}
            color = "#4dbbfa"
          />
          )
        }}
      />
    </Tab.Navigator>

  );
}
