import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import { Camera, useCameraPermission } from 'react-native-vision-camera';
import { RNCamera } from 'react-native-camera';
import { TextDetector } from '@react-native-google-ml-kit/text';
import { GoogleVisionProvider, useIsGooglePlayServicesAvailable } from '@react-native-google-ml-kit/vision';
import { PERMISSIONS, request, check, RESULTS } from 'react-native-permissions';

const App = () => {
    const [ocrText, setOcrText] = useState('');
    const cameraRef = useRef<RNCamera>(null);
    const isGooglePlayServicesAvailable = useIsGooglePlayServicesAvailable();

    const hasCameraPermission = useCameraPermission();

    const checkPermission = async () => {
        if (Platform.OS === 'android') {
            const result = await check(PERMISSIONS.ANDROID.CAMERA);
            if (result !== RESULTS.GRANTED) {
                const requestResult = await request(PERMISSIONS.ANDROID.CAMERA);
                if (requestResult !== RESULTS.GRANTED) {
                    console.log('Camera permission denied');
                    return false;
                }
            }
        }
        return true;
    };

    const recognizeTextFromImage = async () => {
        if (!(await checkPermission())) return;

        if (cameraRef.current) {
            try {
                const options = { quality: 0.8, base64: true };
                const data = await cameraRef.current.takePictureAsync(options);
                const result = await TextDetector.detectFromUri(data.uri);
                if (result && result.length > 0) {
                    let detectedText = '';
                    result.forEach(textBlock => {
                        detectedText += textBlock.text + ' ';
                    });
                    setOcrText(detectedText);
                } else {
                    console.log('No text detected');
                }
            } catch (err) {
                console.error(err);
            }
        }
    };

    if (isGooglePlayServicesAvailable === 'unavailable') {
        return <Text>Google Play Services are not available</Text>;
    }

    return (
        <View style={{ flex: 1 }}>
            {hasCameraPermission ? (
                <Camera
                    style={{ flex: 1 }}
                    ref={(ref) => { cameraRef.current = ref; }}
                    deviceFormat={Camera.CameraDeviceFormat.Photo}
                />
            ) : (
                <Text>Permissions de la caméra non accordées</Text>
            )}

            <TouchableOpacity style={{ margin: 20 }} onPress={recognizeTextFromImage}>
                <Text style={{ fontSize: 20, marginBottom: 10 }}>Capture Image</Text>
            </TouchableOpacity>

            {ocrText ? (
                <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', padding: 20, position: 'absolute', bottom: 0, left: 0, right: 0 }}>
                    <Text style={{ color: 'white' }}>OCR Text: {ocrText}</Text>
                </View>
            ) : null}
        </View>
    );
};

export default () => (
    <GoogleVisionProvider>
        <App />
    </GoogleVisionProvider>
);
