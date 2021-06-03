//TurtleWolfe.com // //custom components
//LoginScreen
//LoginScreen // //custom components
//LoginScreen
//TurtleWolfe.com // //custom components
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface LoginScreenProps {
  alpha?: string;
  beta?: string;
  gamma?: string[];
  delta?: number;
  epsilon?: number[]
  zeta?: boolean;
  LoginScreen?: string;
}

const LoginScreen: React.FC<LoginScreenProps> = ({
  alpha,
  beta,
  gamma,
  delta,
  epsilon,
  zeta,
  LoginScreen = 'LoginScreen',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>
        {LoginScreen}
      </Text>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {

  },
  textContainer: {

  },
})