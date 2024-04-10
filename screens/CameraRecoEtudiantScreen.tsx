import React from 'react';
import {useEffect, useState} from 'react';
import {
  Image, //Permet d'afficher des images
  StyleSheet, //Permet de définir des feuilles de style
  Text, //Permet d'afficher du texte
  TouchableOpacity, //rétroaction tactile lorsqu'il est pressé, comme un bouton
  View, //permet de définir une vue dans laquelle les composants peuvent etre inclus
  Alert
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Camera,//Integre la fonctionnalité de caméra
  useCameraDevice,//gèrer périphérique de la caméra
  useCameraPermission,//Autorisation de la caméra
  useCodeScanner,//Fonctionnalité de scanner code barre
} from 'react-native-vision-camera';

export function CameraRecoEtudiantScreen({navigation}) {
  const [torchOn, settorchOn] = useState(false); // check de la lampe torche, false de base 
  const [enableOnCodeScanned, setEnableOnCodeScanned] = useState(true); //check si le code barre est activé, true de base
  const {
    hasPermission: cameraHasPermission, //check de l'autorisation d'utiliser la caméra
    requestPermission: requestCameraPermission, //demande l'autorisation de la caméra
  } = useCameraPermission();
  const device = useCameraDevice('back'); //obtenir la référence du périphérique de la caméra, back : indique caméra arrière.

  useEffect(() => {
    handleCameraPermission();
  }, []);//execute une fois la caméra

  const codeScanner = useCodeScanner({ // variable pour prendre un objet de configuration
    codeTypes: ['code-39'],
    onCodeScanned: codes => {
      if (enableOnCodeScanned) {
        let value = codes[0]?.value; // On extrait la valeur du code barre
        let type = codes[0]?.type; //On extrait le type de la valeur du code barre

        console.log(codes[0]); //Affiche valeur du code barre
        setEnableOnCodeScanned(false); //désactivation pour éviter que le meme code ne soit traité
      }
    },
  });

  //Cette partie de code check si on a bien l'autorisation de la caméra
  const handleCameraPermission = async () => {
    const granted = await requestCameraPermission(); //si caméra autorisée alors granted = TRUE

    if (!granted) { //Si autorisation pour la caméra non accordée
      Alert.alert(
        'Camera permission is required to use the camera. Please grant permission in your device settings.',
      );
    }
  };

  const showAlert = (value = '', showMoreBtn = true) => {
    alert(
      value,,
      showMoreBtn
        ? [
            {
              //Affiche bouton cancel, renvoie juste un message d'erreur dans la console
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            //Affiche bouton more, désactive la torche, possibilité de scanner un nouveau code, enableOnCodeScanned = true
            {
              text: 'More',
              onPress: () => {
                settorchOn(false);
                setEnableOnCodeScanned(true);
              },
            },
          ]
          //Affiche bouton cancel, possibilité de scanner un nouveau code, enableOnCodeScanned = true
        : [
            {
              text: 'Cancel',
              onPress: () => setEnableOnCodeScanned(true),
              style: 'cancel',
            },
          ],
      {cancelable: false},// alerte ne peut pas etre utilisée
    );
  };

  const RoundButtonWithImage = () => {
    return (
      <TouchableOpacity
        onPress={() => settorchOn(prev => !prev)} //Bouton pour activer ou désactiver la torche
        style={styles.buttonContainer}>
        <View style={styles.button}>
          <Image
            source={
              torchOn //affiche logo torche allumée ou eteinte selon si elle l'est ou non.
                ? require('./assets/flashlight_on.png')
                : require('./assets/torch_off.png')
            }
            style={styles.buttonImage}
          />
        </View>
      </TouchableOpacity>
    );
  };

  if (device == null)// S'il n'y a pas de caméra
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{margin: 10}}>Camera Not Found</Text>
      </View>
    );
  return ( //Sinonla camera s'affiche
    <SafeAreaView style={{flex: 1}}>
      <RoundButtonWithImage />
      <Camera
        codeScanner={codeScanner}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        torch={torchOn ? 'on' : 'off'}
        onTouchEnd={() => setEnableOnCodeScanned(true)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
    right: 20,
    top: 20,
  },
  button: {
    backgroundColor: '#FFF', // Button background color
    borderRadius: 50, // Make it round (half of the width and height)
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonImage: {
    width: 25, // Adjust the width and height of the image as needed
    height: 25,
  },
});
