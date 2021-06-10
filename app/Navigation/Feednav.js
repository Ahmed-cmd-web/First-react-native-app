import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Listing from '../screens/Listing';
import Listingdetails from '../screens/Listingdetails';


const Stack=createStackNavigator()
const Stacknav = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    mode='modal'
  >
    <Stack.Screen name="listings" component={Listing} />
    <Stack.Screen name="listingsdetails" component={Listingdetails} />
  </Stack.Navigator>
);


export default Stacknav