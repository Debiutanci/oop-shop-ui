import React, { useEffect, useMemo, useReducer } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivityIndicator, View } from 'react-native';

import { AuthContext } from './src/context/context';
import LoginStart from './src/components/LoginStart';
import LoginSuccess from './src/components/LoginSuccess';
import LoginError from './src/components/LoginError';

const Stack = createNativeStackNavigator();

function MyStack() {
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      default:
        return {
          ...prevState,
        };
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = useMemo(
    () => ({
      signIn: (email, password) => {
        let userToken;
        userToken = null;
        if (email === 'debiutant@test.pl' && password === 'debiutant1234') {
          userToken = 'qwerty';
        }
        dispatch({
          type: 'LOGIN',
          token: userToken,
        });
      },
      signOut: () => {
        dispatch({
          type: 'LOGOUT',
        });
      },
      signUp: () => {
        // setUserToken('werty');
        // setIsLoading(false);
      },
    }),
    [],
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: 'RETRIEVE_TOKEN',
        token: 'ytrewq',
      });
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {!loginState.userToken ? (
            <>
              <Stack.Screen name="LoginStart" component={LoginStart} />
              <Stack.Screen name="LoginError" component={LoginError} />
            </>
          ) : (
            <Stack.Screen name="LoginSuccess" component={LoginSuccess} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default MyStack;
