//TurtleWolfe.com // //custom components
//RegisterScreen
//RegisterScreen // //custom components
//RegisterScreen
//TurtleWolfe.com // //custom components
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface RegisterScreenProps {
  alpha?: string;
  beta?: string;
  gamma?: string[];
  delta?: number;
  epsilon?: number[]
  zeta?: boolean;
  RegisterScreen?: string;
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({
  alpha,
  beta,
  gamma,
  delta,
  epsilon,
  zeta,
  RegisterScreen = 'RegisterScreen',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>
        {RegisterScreen}
      </Text>
    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container: {

  },
  textContainer: {

  },
})