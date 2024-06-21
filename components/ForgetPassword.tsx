import { Pressable, Text, View } from 'react-native'
import React, { FC } from 'react'

import { Colors } from '@/constants/Colors';
import { ThemedText } from './ThemedText';

interface ForgetPasswordProps {
  title: string;
  onPress: () => void;
}

export const ForgetPassword:React.FC<ForgetPasswordProps> = ({title,onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <View>
        <ThemedText lightColor={Colors.light.gray}>{title}</ThemedText>
      </View>
    </Pressable>
  );
}
