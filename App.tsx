import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TabScreen from './src/components/TabScreen';
import LaunchScreen from './src/components/LaunchScreen';
import {store} from './src/redux/store/Store';
import {Provider} from 'react-redux';
import {LogBox} from 'react-native';

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
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'TabScreen'}
            component={TabScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
