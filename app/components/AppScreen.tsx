//TurtleWolfe.com // //custom components
//AppScreen
//AppScreen // //custom components
//AppScreen
//TurtleWolfe.com // //custom components
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

interface AppScreenProps {
  alpha?: string;
  beta?: string;
  gamma?: string[];
  delta?: number;
  epsilon?: number[]
  zeta?: boolean;
  AppScreen?: string;
}

const AppScreen: React.FC<AppScreenProps> = ({
  alpha,
  beta,
  gamma,
  delta,
  epsilon,
  zeta,
  AppScreen = 'AppScreen',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>
        {AppScreen}
      </Text>
    </View>
  )
}

export default AppScreen

const styles = StyleSheet.create({
  container: {

  },
  textContainer: {

  },
})