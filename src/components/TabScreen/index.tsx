import MaterialCommunityIcons from 'react-native-vector-icons/Foundation';
import React from 'react';
import HomeScreen from '../HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ARScene from '../ARScene';
import {NavigationContainer} from '@react-navigation/native';

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
            tabBarLabel: 'AR',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="camera" color={color} size={size} />
            ),
          }}
          name="AR"
          component={ARScene}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabScreen;
