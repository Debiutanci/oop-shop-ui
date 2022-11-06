import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginStart from './src/components/LoginStart';
import LoginSuccess from './src/components/LoginSuccess';
import LoginError from './src/components/LoginError';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="LoginStart" component={LoginStart} />
        <Stack.Screen name="LoginSuccess" component={LoginSuccess} />
        <Stack.Screen name="LoginError" component={LoginError} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
