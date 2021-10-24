import MaterialCommunityIcons from 'react-native-vector-icons/Foundation';
import React from 'react';
import HomeScreen from '../HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from '../ProfileScreen';
import ScannerScreen from '../ScannerScreen';
const Tab = createBottomTabNavigator();

const TabScreen = () => {
  const MyTheme = {
    dark: false,
    colors: {
      primary: 'rgb(255, 45, 85)',
      background: 'rgb(242, 242, 242)',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
  };

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#e36463',
        inactiveTintColor: 'grey',
        style: {
          backgroundColor: 'white',
        },
      }}>
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
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="torso" color={color} size={size} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default TabScreen;
