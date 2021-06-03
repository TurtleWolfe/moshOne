//TurtleWolfe.com // //custom components
//AppButton
//AppButton // //custom components
//AppButton
//TurtleWolfe.com // //custom components
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

interface AppButtonProps {
  alpha?: string;
  beta?: string;
  gamma?: string[];
  delta?: number;
  epsilon?: number[]
  zeta?: boolean;
  AppButton?: string;
}

const AppButton: React.FC<AppButtonProps> = ({
  alpha,
  beta,
  gamma,
  delta,
  epsilon,
  zeta,
  AppButton = 'AppButton',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>
        {AppButton}
      </Text>
    </View>
  )
}

export default AppButton

const styles = StyleSheet.create({
  container: {

  },
  textContainer: {

  },
})