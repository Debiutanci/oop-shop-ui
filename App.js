import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginStart from './src/components/LoginStart';
import LoginSuccess from './src/components/LoginSuccess';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Screen1" component={LoginStart} />
        <Stack.Screen name="Screen2" component={LoginSuccess} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
