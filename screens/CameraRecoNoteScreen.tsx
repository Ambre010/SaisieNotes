import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera, useCameraPermission } from 'react-native-vision-camera';
import vision from '@react-native-firebase/ml';
import { PERMISSIONS, request, check, RESULTS } from 'react-native-permissions';

const App = () => {
    const [ocrText, setOcrText] = useState('');
    const cameraRef = useRef<Camera>(null);
    const hasCameraPermission = useCameraPermission();

    const checkPermission = async () => {
        const permissionStatus = await check(PERMISSIONS.IOS.CAMERA);
        if (permissionStatus === RESULTS.DENIED) {
            const result = await request(PERMISSIONS.IOS.CAMERA);
            if (result === RESULTS.GRANTED) {
                console.log('Camera permission granted');
            } else {
                console.log('Camera permission denied');
            }
        }
    };

    const recognizeTextFromImage = async () => {
        if (cameraRef.current) {
            try {
                const photo = await cameraRef.current.takePhoto();
                const result = await vision().textRecognizerProcessImage(photo.path);
                if (result && result.length > 0) {
                    let detectedText = '';
                    result.forEach((textBlock: { text: string }) => {
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

    return (
        <View style={styles.container}>
            {hasCameraPermission ? (
                <Camera
                    style={styles.camera}
                    ref={cameraRef}
                    photo={true}
                    format={{ maxFrameRate: 30 }}
                    autoFocus={true}
                    flash="auto"
                />
            ) : (
                <Text>Camera permission not granted</Text>
            )}

            <TouchableOpacity style={styles.button} onPress={recognizeTextFromImage}>
                <Text style={styles.buttonText}>Capture Image</Text>
            </TouchableOpacity>

            {ocrText ? (
                <View style={styles.ocrTextContainer}>
                    <Text style={styles.ocrText}>OCR Text: {ocrText}</Text>
                </View>
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    camera: {
        flex: 1,
        width: '100%',
    },
    button: {
        backgroundColor: 'blue',
        padding: 20,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
    },
    ocrTextContainer: {
        position: 'absolute',
        bottom: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 10,
    },
    ocrText: {
        color: 'white',
        fontSize: 18,
    },
});

export default App;
