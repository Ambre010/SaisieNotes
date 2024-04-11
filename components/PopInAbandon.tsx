/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';

interface PopInAbandonProps {
  visible: boolean;
  onClose: () => void;
  onNavigateHome: () => void;
}

const PopInAbandon: React.FC<PopInAbandonProps> = ({ visible, onClose, onNavigateHome }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, alignItems: 'center' }}>
          <Text style={{ fontSize: 20, marginBottom: 20 }}>Êtes-vous sûr de vouloir abandonner ?</Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ marginRight: 10 }} onPress={onNavigateHome}>
              <Text style={{ fontSize: 18, color: 'blue' }}>Revenir à l'accueil</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClose}>
              <Text style={{ fontSize: 18, color: 'red' }}>Continuer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default PopInAbandon;
