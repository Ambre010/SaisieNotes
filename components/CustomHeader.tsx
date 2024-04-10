import React from 'react';
import { Header } from 'react-native-elements';
import { StackHeaderProps } from '@react-navigation/stack';

interface CustomHeaderProps extends StackHeaderProps {
  title?: string;
  showBackButton?: boolean;
  showCloseButton?: boolean;
  onPressBack?: () => void;
  onPressClose?: () => void;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({
  title,
  showBackButton,
  showCloseButton,
  onPressBack,
  onPressClose,
}) => {

  return (
    <Header
      backgroundColor="#4F56FF"
      title= "Saisie Notes UB"
      centerComponent={{ text: title, style: { color: '#fff', fontSize: 20 } }}
      leftComponent={showBackButton && <Icon name="chevron_left" color="white" onPress={onPressBack} />}
      rightComponent={showCloseButton && <Icon name="close" color="white" onPress={onPressClose} />}
    />
  );
};

export default CustomHeader;
