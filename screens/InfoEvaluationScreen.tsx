import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';

export const InfoEvaluationScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleClose = () => {
    navigation.dispatch(StackActions.popToTop()); // Réinitialiser la pile de navigation
  };

  const handleStartSaisie = () => {
    // Rediriger vers l'écran de la caméra
    navigation.navigate('CameraRecoTest');
  };

  return (
    <View style={styles.container}>
      {/* Contenu de la page */}
      <View style={styles.textePContainer}>
        <View style={styles.textePContainer}>
          <Text style={styles.textePincipal}> Entrez le nom que vous souhaitez donner à cette évaluation.</Text>
        </View>
        {/* Nom de l'évaluation */}
        <View style={{alignItems:'center'}}>
        <TextInput
          placeholder="Entrez le nom de l'évaluation"
          style={styles.textInput}
        />
        </View>
        <View style={styles.texteSContainer}>
        <Text style={styles.texteSecondaire}>Maintenant, munissez vous des copies notées, et scannez le premier code barre de l'élève à enregistrer !</Text>
        </View>
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
      <TouchableOpacity onPress={handleStartSaisie} style={styles.button}>
        <Text style={styles.buttonText}>Scanner le code-barre de l'élève</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image : {
    paddingTop: 105,
  },
  textInput : {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 8,
    marginTop: 55,
    width: 315,
  },
  textePContainer :{
    marginTop: 20,
    textAlign:'center',
    justifyContent: 'space-between',
  },
  textePincipal : {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:'center',
  },
  texteSContainer :{
    marginTop: 340,
    textAlign:'center',
  },
  texteSecondaire : {
    fontSize: 17,
    textAlign:'center',
  },
  container : {
    justifyContent: 'space-between',
    padding: 20,
    margin: 10,
    flex: 1,
    alignItems: 'center',
    marginHorizontal:15,
  },
    button : {
      backgroundColor: '#007bff',
      padding: 15,
      borderRadius: 10,
      width: 315,
      height: 60,
      alignItems: 'center',
      marginBottom:25,
    },
    buttonText : {
      color: 'white',
      fontSize: 18,
      verticalAlign:'middle',
    },
  }
);
