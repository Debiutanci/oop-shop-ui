import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import UserProfile from '../../screens/Profile';

import CartIcon from '../../assets/tabNavigator/shopping-cart.png';
import HomeIcon from '../../assets/tabNavigator/home.png';
import ProfileIcon from '../../assets/tabNavigator/user.png';

function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>There will be list of items :)</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>There will be list of items chosen to buy</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function Nav() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerStyle: {
          backgroundColor: '#c9b7ff',
          height: 120,
        },
        headerTitleStyle: {
          color: 'white',
          fontSize: 30,
        },
        tabBarActiveTintColor: '#7d53ff',
        tabBarInactiveTintColor: '#b8b8b8',
      })}
    >
      <Tab.Screen
        name="Items"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => <Image source={HomeIcon} style={styles.tabIcon(focused)} />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => <Image source={CartIcon} style={styles.tabIcon(focused)} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={UserProfile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image source={ProfileIcon} style={styles.tabIcon(focused)} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabIcon: (isFocused) => ({
    width: 25,
    height: 25,
    marginTop: 10,
    tintColor: isFocused ? '#7d53ff' : '#b8b8b8',
  }),
});

export default Nav;
