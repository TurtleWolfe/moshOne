//TurtleWolfe.com // //custom components
//AppTextInput
//AppTextInput // //custom components
//AppTextInput
//TurtleWolfe.com // //custom components
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

interface AppTextInputProps {
  alpha?: string;
  beta?: string;
  gamma?: string[];
  delta?: number;
  epsilon?: number[]
  zeta?: boolean;
  AppTextInput?: string;
}

const AppTextInput: React.FC<AppTextInputProps> = ({
  alpha,
  beta,
  gamma,
  delta,
  epsilon,
  zeta,
  AppTextInput = 'AppTextInput',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>
        {AppTextInput}
      </Text>
    </View>
  )
}

export default AppTextInput

const styles = StyleSheet.create({
  container: {

  },
  textContainer: {

  },
})