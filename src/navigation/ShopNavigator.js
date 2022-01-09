import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Platform} from 'react-native'

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import Colors from '../constants/Colors'

const Stack = createNativeStackNavigator();

const headerOptions={
    title: 'My home',
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }

function ShopNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={headerOptions}
      >
        <Stack.Screen 
            name="ProductsOverview" 
            component={ProductsOverviewScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ShopNavigator;