import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';

export const InfoEvaluationScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleClose = () => {
    navigation.dispatch(StackActions.popToTop()); // Réinitialiser la pile de navigation
  };

  const handleStartSaisie = () => {
    //Rediriger vers l'écran de la caméra
    // navigation.navigate('CameraRecoEtudiantScreen');

  };

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <Header
        backgroundColor="#007bff" // Même couleur que AccueilScreen
        leftComponent={<Icon name="close" type="material" color="white" onPress={handleClose} />}
        centerComponent={{ text: 'Information Evaluation', style: { color: '#fff', fontSize: 20 } }}
      />

      {/* Contenu de la page */}
      <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
        {/* Nom de l'évaluation */}
        <Text style={{ fontSize: 16, marginBottom: 5 }}>Nom de l'évaluation</Text>
        <TextInput
          placeholder="Entrez le nom de l'évaluation"
          style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 5, padding: 10 }}
        />

        {/* <Text style={{ fontSize: 16, marginTop: 20, marginBottom: 5 }}>Sélectionnez la matière</Text>
        <Picker
          selectedValue={selectedMatiere}
          style={{ height: 50, width: '100%', borderWidth: 1, borderColor: 'gray', borderRadius: 5 }}
          onValueChange={(itemValue, itemIndex) => setSelectedMatiere(itemValue)}>
          <Picker.Item label="Mathématiques" value="mathematiques" />
          <Picker.Item label="Programmation Orientée Objet" value="poo" />
          <Picker.Item label="Info" value="info" />
        </Picker> */}
      </View>

      {/* Bouton Commencer la saisie */}
      <TouchableOpacity onPress={handleStartSaisie} style={{ backgroundColor: '#007bff', paddingVertical: 15, borderRadius: 10, marginHorizontal: 20, marginBottom: 20, alignItems: 'center' }}>
        <Text style={{ color: 'white', fontSize: 18 }}>Commencer la saisie</Text>
      </TouchableOpacity>
    </View>
  );
};