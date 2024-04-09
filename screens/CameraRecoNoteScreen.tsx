// import * as React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { Camera, useCameraPermission } from 'react-native-vision-camera';
// import TesseractOcr, { LANG_ENGLISH } from 'react-native-tesseract-ocr';
// import { useState, useRef } from 'react';

// export const AjoutNoteScreen: React.FC<{ route: any }> = ({ route }) => {
//     const [ocrText, setOcrText] = useState('');
//     const cameraRef = useRef<Camera | null>(null);

//     const hasCameraPermission = useCameraPermission();

//     if (cameraRef.current) {
//         try {
//             const photo = await cameraRef.current.takePhoto();
//             const result = await TesseractOcr.recognize(
//                 photo.path,
//                 LANG_ENGLISH,
//                 { whitelist: '0123456789', blacklist: '!@#$%^&*()_+=-[]{}|:;,.<>/?~' }
//             );
//             setOcrText(result);
//         } catch (err) {
//             console.error(err);
//         }
//     }


//     return (
//         <View style={{ flex: 1 }}>
//             {hasCameraPermission ? (
//                 <Camera
//                     style={{ flex: 1 }}
//                     ref={(ref) => { cameraRef.current = ref; }}
//                     deviceFormat={Camera.CameraDeviceFormat.Photo}
//                 />
//             ) : (
//                 <Text>Permissions de la caméra non accordées</Text>
//             )}

//             <TouchableOpacity style={{ margin: 20 }} onPress={recognizeTextFromImage}>
//                 <Text style={{ fontSize: 20, marginBottom: 10 }}>Capture Image</Text>
//             </TouchableOpacity>

//             {ocrText ? (
//                 <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', padding: 20, position: 'absolute', bottom: 0, left: 0, right: 0 }}>
//                     <Text style={{ color: 'white' }}>OCR Text: {ocrText}</Text>
//                 </View>
//             ) : null}
//         </View>
//     );
    
// };

// export default App;
