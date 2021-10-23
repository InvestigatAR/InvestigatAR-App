import MaterialCommunityIcons from 'react-native-vector-icons/Foundation';
import React from 'react';
import HomeScreen from '../HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ARScene from '../ARScene';
import {NavigationContainer} from '@react-navigation/native';
import ProfileScreen from '../ProfileScreen';
import ScannerScreen from "../ScannerScreen";
const Tab = createBottomTabNavigator();

const TabScreen = () => {
  const navProps = {independent: true, initialRouteName: 'home'};

  return (
    <NavigationContainer {...navProps}>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: 'Scanner',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="camera" color={color} size={size} />
            ),
          }}
          name="Scan"
          component={ScannerScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: 'AR',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="camera" color={color} size={size} />
            ),
          }}
          name="AR"
          component={ARScene}
        />
        <Tab.Screen
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="torso"
                color={color}
                size={size}
              />
            ),
          }}
          name="Profile"
          component={ProfileScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabScreen;
