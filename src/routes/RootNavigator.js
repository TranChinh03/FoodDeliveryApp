import {StyleSheet} from 'react-native';
import React from 'react';
import OnBoardingScreen from '../screens/onBoarding/OnBoardingScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import HomeScreen from '../screens/MyDrawer/home/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CartScreen from '../screens/cart/CartScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import HistoryScreen from '../screens/history/HistoryScreen';
import SearchScreen from '../screens/search/SearchScreen';
import DeliveryScreen from '../screens/checkOut/DeliveryScreen';
import PaymentScreen from '../screens/checkOut/PaymentScreen';
import FoodDetailScreen from '../screens/food/FoodDetailScreen';
import LoadingScreen from '../screens/loading/LoadingScreen';
import NoConnectScreen from '../screens/noConnect/NoConnectScreen';
import OrderScreen from '../screens/order/OrderScreen';
import ProfileEditScreen from '../screens/profile/ProfileEditScreen';
import NotFoundScreen from '../screens/search/NotFoundScreen';
import MyDrawer from '../screens/MyDrawer/Drawer/index';






const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="OnBoarding"
            component={OnBoardingScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MyDrawer"
            component={MyDrawer}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CartScreen"
            component={CartScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SearchScreen"
            component={SearchScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="NotFoundScreen"
            component={NotFoundScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="HistoryScreen"
            component={HistoryScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DeliveryScreen"
            component={DeliveryScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PaymentScreen"
            component={PaymentScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="FoodDetailScreen"
            component={FoodDetailScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ProfileEditScreen"
            component={ProfileEditScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="OrderScreen"
            component={OrderScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="LoadingScreen"
            component={LoadingScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="NoConnectScreen"
            component={NoConnectScreen}
            options={{headerShown: false}}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default RootNavigator;

AppRegistry.registerComponent(appName, () => AuthStack);