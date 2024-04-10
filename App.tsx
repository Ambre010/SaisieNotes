/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AccueilScreen} from './screens/AccueilScreen';
import {InfoEvaluationScreen} from './screens/InfoEvaluationScreen';
import { CameraRecoTest } from './screens/CameraRecoTest';
import {AjoutNoteScreen} from './screens/AjoutNoteScreen';
import CustomHeader from './components/CustomHeader';

// // Définition du type de navigation stack
// export type RootStackParamList = {
//   Accueil: undefined;
//   InfoEvaluation: undefined;
//   // Vous pouvez ajouter d'autres écrans ici si nécessaire
// };

// const Stack = createStackNavigator<RootStackParamList>();


const Stack = createStackNavigator();


const App = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{
          header: () => (
            <CustomHeader
  title="Saisie Notes UB"
  showBackButton={false}
  showCloseButton={false}
  onBackPress={() => { 
  }}
  onClosePress={() => {
    // Gérer la fermeture
  }}
/>
          ),
        }}>
      <Stack.Screen name="Accueil" component={AccueilScreen}  />
      <Stack.Screen name="InfoEvaluation" component={InfoEvaluationScreen}/>
      <Stack.Screen name="AjoutNote" component={AjoutNoteScreen} />
      <Stack.Screen name="CameraRecoTest" component={CameraRecoTest} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
