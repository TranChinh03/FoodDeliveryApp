// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import OnBoardingScreen from './src/screens/onBoarding/OnBoardingScreen';
// import LoginScreen from './src/screens/auth/LoginScreen';
// import HomeScreen from './src/screens/home/HomeScreen';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

// const App = props => {
//   return (
//     <>
//       <NavigationContainer>
//         <Stack.Navigator screenOptions={{headerShown: false}}>
//           <Stack.Screen name="Onboarding" options={{headerShown: false}}>
//             {props => <OnBoardingScreen {...props} />}
//           </Stack.Screen>
//           <Stack.Screen name="Login" options={{headerShown: false}}>
//             {props => <LoginScreen {...props} />}
//           </Stack.Screen>
//           <Stack.Screen name="Home" options={{headerShown: false}}>
//             {props => <HomeScreen {...props} />}
//           </Stack.Screen>
//         </Stack.Navigator>
//       </NavigationContainer>
//     </>
//   );
// };

// export default App;

import React from 'react';
import RootNavigator from './src/routes/RootNavigator';

const App = props => {
  return <RootNavigator {...props} />
}

export default App
