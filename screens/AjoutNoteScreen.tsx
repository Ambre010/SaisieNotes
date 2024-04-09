import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { StackActions, useNavigation } from '@react-navigation/native';

export const AjoutNoteScreen: React.FC<{ route: any }> = ({ route }) => {
  const { note } = route.params;
  const navigation = useNavigation();
  const [noteModifiable, setNoteModifiable] = useState(note);

  const handleClose = () => {
    navigation.dispatch(StackActions.popToTop()); // Réinitialiser la pile de navigation
  };

  const handleEnregistrerNote = () => {
    // faut compléter pour enregistrer la note à l'élève avant de rediriger
    //navigation.navigate('ContinuerOuTerminerScreen');
  };

  const handleRecommencerSaisie = () => {
    //navigation.navigate('CameraRecoEtudiantScreen');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={handleClose} style={{ position: 'absolute', top: 10, right: 10 }}>
        <Text>X</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text>Ajouter la note de </Text>
        <TextInput
          value={noteModifiable}
          onChangeText={setNoteModifiable}
          keyboardType="numeric"
          style={{ borderWidth: 1, borderColor: 'gray', padding: 5, width: 50 }}
        />
        <Text> pour cet élève ?</Text>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <TouchableOpacity onPress={handleEnregistrerNote} style={{ marginRight: 20 }}>
          <Text>Oui</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRecommencerSaisie}>
          <Text>Non, recommencer la saisie de cet élève</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
