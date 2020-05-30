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
import images from '../assets/icons'
import { MultiBarButton } from 'react-native-multibar';

export default function BottomStackScreen() {
  const Tab = createBottomTabNavigator();
  return (

    <Tab.Navigator
      initialRouteName="WelcomeScreen1"
      tabBarOptions={{
        activeTintColor: '#096482',
      }}
    >
      <Tab.Screen
        name="Home"
        component={WelcomeScreen1}
        options={{
          tabBarIcon: () => (
            <Image
              source={images.homeIcon}
            />
          )
        }}
      />
      <Tab.Screen
        name="Group"
        component={WelcomeScreen2}
        options={{
          tabBarIcon: () => (
            <Image
              source={images.groupIcon}

            />
          )
        }}
      />
      <Tab.Screen
        name="Center"
        component={WelcomeScreen3}
        options={{
          tabBarIcon: () => (
            <View
            style = {{
              position: 'absolute',
              bottom: 20, // space from bottombar
              height: 58,
              width: 58,
              borderRadius: 58,
              backgroundColor: '#5a95ff',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            >
              <Image
                source={images.healthIcon}
                style = {{
                  width: 40,
            height: 40,
            tintColor: '#f1f6f9',
            alignContent: 'center',
 
                }}
              />
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Alarm"
        component={WelcomeScreen4}
        options={{
          tabBarIcon: () => (
            <Image
            source={images.alarmIcon}
          />
          )
        }}
      />
      <Tab.Screen
        name="Random"
        component={WelcomeScreen1}
        options={{
          tabBarIcon: () => (
            <Image
            source={images.randomIcon}
          />
          )
        }}
      />
    </Tab.Navigator>

  );
}
const styles = StyleSheet.create({
  bottomBarBackground: {
    
  }
}

)
