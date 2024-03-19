import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

const Perfil = () => {
  const route = useRoute();
  const { userId } = route.params;

  return (
    <View>
      <Text>User ID: {userId}</Text>
    </View>
  );
};

export default Perfil;
