import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Camera, useCameraDevice, useCameraPermission, useCodeScanner } from 'react-native-vision-camera';

export const CameraRecoTest: React.FC = () => {
  const [torchOn, setTorchOn] = useState(false);
  const [enableOnCodeScanned, setEnableOnCodeScanned] = useState(true);
  const { requestPermission: requestCameraPermission } = useCameraPermission();
  const device = useCameraDevice('back');

  useEffect(() => {
    handleCameraPermission();
  }, []);

  const codeScanner = useCodeScanner({
    codeTypes: ['code-39'],
    onCodeScanned: codes => {
      if (enableOnCodeScanned) {
        let value = codes[0]?.value;
        let type = codes[0]?.type;
  
        console.log(value, type); // Supprimez ces lignes si vous n'utilisez pas les valeurs
        setEnableOnCodeScanned(false);
      }
    },
  });
  

  const handleCameraPermission = async () => {
    const granted = await requestCameraPermission();

    if (!granted) {
      showAlert(
        'Camera Permission Required',
        'Camera permission is required to use the camera. Please grant permission in your device settings.'
      );
    }
  };

  const showAlert = (title: string, message: string | undefined) => {
    Alert.alert(
      title,
      message,
      [
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
          style: 'cancel',
        },
      ],
      { cancelable: false }
    );
  };

  const RoundButtonWithImage = () => {
    return (
      <TouchableOpacity
        onPress={() => setTorchOn(prev => !prev)}
        style={styles.buttonContainer}>
        <View style={styles.button}>
          <Image
            source={
              torchOn
                ? require('../image/flash_on.png')
                : require('../image/flash_off.png')
            }
            style={styles.buttonImage}
          />
        </View>
      </TouchableOpacity>
    );
  };

  if (!device)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ margin: 10 }}>Camera Not Found</Text>
      </View>
    );

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
    backgroundColor: '#FFF',
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonImage: {
    width: 25,
    height: 25,
  },
});
