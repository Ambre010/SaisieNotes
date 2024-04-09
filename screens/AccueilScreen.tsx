import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
// import { Ionicons } from 'react-native-vector-icons';

export const AccueilScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleSaisirNotePress = () => {
    navigation.navigate('InfoEvaluation');
  };

  return (
    <View style={{flex: 1}}>
      <Header
        backgroundColor="#007bff" // Bleu
        // leftComponent={<Ionicons name="logo-react" size={24} color="white" />}
        centerComponent={{
          text: 'Accueil',
          style: {color: '#fff', fontSize: 20},
        }}
      />

      {/* Contenu de la page */}
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => handleSaisirNotePress()}
          style={{backgroundColor: '#007bff', padding: 15, borderRadius: 10}}>
          <Text style={{color: 'white', fontSize: 18}}>Commencer la saisie</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
