import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text, TouchableOpacity } from 'react-native'
import LoginScreen from "./src/screens/LoginScreen"
import BookKeepingScreen from "./src/screens/BookKeepingScreen"

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"BookKeeping"}
        screenOptions={{
          // headerShown: false,
          // animationEnabled: false,
        }}
      >
        {/* 設立路由(可被造訪的頁面) */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="BookKeeping" component={BookKeepingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

