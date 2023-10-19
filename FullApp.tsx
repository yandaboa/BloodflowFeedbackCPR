import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App from './components/App';
import StatusDisplay from './components/StatusDisplay';

const Stack = createNativeStackNavigator();

function FullApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen options={{ headerShown: false }} name="Home" component={App} />
        <Stack.Screen options={{ headerShown: false }} name="StatusDisplay" component={StatusDisplay} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default FullApp; //