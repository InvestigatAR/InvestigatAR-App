import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TabScreen from './src/components/TabScreen';
import LaunchScreen from './src/components/LaunchScreen';
import LoginScreen from './src/components/LoginScreen';
import SignupScreen from './src/components/SignupScreen';
import {store} from './src/redux/store/Store';
import {Provider} from 'react-redux';
import {LogBox} from 'react-native';
import ARScreen from './src/components/ARScreen';
import ReviewScreen from "./src/components/ReviewScreen";

const Stack = createStackNavigator();

const App = () => {
  // disable logging
  LogBox.ignoreAllLogs(true);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={'Launch'}
            component={LaunchScreen}
            options={{headerShown: false, headerLeft: () => null}}
          />
          <Stack.Screen
            name={'LoginScreen'}
            component={LoginScreen}
            options={{headerShown: false, headerLeft: () => null}}
          />
          <Stack.Screen
            name={'SignupScreen'}
            component={SignupScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'TabScreen'}
            component={TabScreen}
            options={{headerShown: false, headerLeft: () => null}}
          />
          <Stack.Screen
            name={'ARScreen'}
            component={ARScreen}
            options={{headerShown: false, headerLeft: () => null}}
          />
          <Stack.Screen
            name={'ReviewScreen'}
            component={ReviewScreen}
            options={{headerShown: false, headerLeft: () => null}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
