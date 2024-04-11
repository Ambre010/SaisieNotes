import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// import { Ionicons } from 'react-native-vector-icons';

export const AccueilScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleSaisirNotePress = () => {
    navigation.navigate('InfoEvaluation');
  };

  return (
    <View style={styles.container}>
      {/* Contenu de la page */}
        <View style={styles.image}>
          <Image source={require('../images/emojiMain.png')} height={200} width={200}/>
        </View>
        <View style={styles.textePContainer}>
          <Text style={styles.textePincipal}> Bienvenue sur Saisie Notes UB !</Text>
        </View>
        <View style={styles.texteSContainer}>
          <Text style={styles.texteSecondaire}>Vous pouvez commencer à saisir les notes de vos élèves ici.</Text>
        </View>
        <TouchableOpacity
          onPress={() => handleSaisirNotePress()}
          style={styles.button}>
          <Text style={styles.buttonText}>Commencer la saisie</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image : {
    paddingTop: 105,
  },
  textePContainer :{
    marginTop: 20,
    textAlign:'center',
  },
  textePincipal : {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign:'center',
  },
  texteSContainer :{
    marginTop: 145,
    paddingBottom: 10,
    textAlign:'center',
  },
  texteSecondaire : {
    fontSize: 22,
    textAlign:'center',
  },
  container : {
    justifyContent: 'space-between',
    padding: 20,
    margin: 10,
    flex: 1,
    alignItems: 'center',
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
