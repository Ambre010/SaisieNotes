/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AccueilScreen} from './screens/AccueilScreen';
import {InfoEvaluationScreen} from './screens/InfoEvaluationScreen';
// import { CameraRecoEtudiantScreen } from './screens/CameraRecoEtudiantScreen';
import {AjoutNoteScreen} from './screens/AjoutNoteScreen';

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
    <Stack.Navigator>
      <Stack.Screen name="Accueil" component={AccueilScreen} />
      <Stack.Screen name="InfoEvaluation" component={InfoEvaluationScreen} />
      <Stack.Screen name="AjoutNote" component={AjoutNoteScreen} />
      {/* <Stack.Screen name="CameraRecoEtudiant" component={CameraRecoEtudiantScreen} /> */}
    </Stack.Navigator>
  </NavigationContainer>
)

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
