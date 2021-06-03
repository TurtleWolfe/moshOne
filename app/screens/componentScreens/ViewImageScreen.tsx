//TurtleWolfe.com // //custom components
//ViewImageScreen
//ViewImageScreen // //custom components
//ViewImageScreen
//TurtleWolfe.com // //custom components
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface ViewImageScreenProps {
  alpha?: string;
  beta?: string;
  gamma?: string[];
  delta?: number;
  epsilon?: number[]
  zeta?: boolean;
  ViewImageScreen?: string;
}

const ViewImageScreen: React.FC<ViewImageScreenProps> = ({
  alpha,
  beta,
  gamma,
  delta,
  epsilon,
  zeta,
  ViewImageScreen = 'ViewImageScreen',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>
        {ViewImageScreen}
      </Text>
    </View>
  )
}

export default ViewImageScreen

const styles = StyleSheet.create({
  container: {

  },
  textContainer: {

  },
})