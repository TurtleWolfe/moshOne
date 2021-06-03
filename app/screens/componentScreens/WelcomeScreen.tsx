//TurtleWolfe.com // //custom components
//WelcomeScreen
//WelcomeScreen // //custom components
//WelcomeScreen
//TurtleWolfe.com // //custom components
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface WelcomeScreenProps {
  alpha?: string;
  beta?: string;
  gamma?: string[];
  delta?: number;
  epsilon?: number[]
  zeta?: boolean;
  WelcomeScreen?: string;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  alpha,
  beta,
  gamma,
  delta,
  epsilon,
  zeta,
  WelcomeScreen = 'WelcomeScreen',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>
        {WelcomeScreen}
      </Text>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  container: {

  },
  textContainer: {

  },
})