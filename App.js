import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { useFonts } from 'expo-font';
import { SignUp } from './screens';
import Tabs from './navigation/Tabs';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.color,
    border: 'transparent',
  },
};

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'SignUp'}
      >
        <Stack.Screen name='SignUp' component={SignUp} />

        {/* Tabs */}
        <Stack.Screen name='Home' component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
