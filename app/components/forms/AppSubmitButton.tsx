//TurtleWolfe.com // //custom components
//AppSubmitButton
//AppSubmitButton // //custom components
//AppSubmitButton
//TurtleWolfe.com // //custom components
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

interface AppSubmitButtonProps {
  alpha?: string;
  beta?: string;
  gamma?: string[];
  delta?: number;
  epsilon?: number[]
  zeta?: boolean;
  AppSubmitButton?: string;
}

const AppSubmitButton: React.FC<AppSubmitButtonProps> = ({
  alpha,
  beta,
  gamma,
  delta,
  epsilon,
  zeta,
  AppSubmitButton = 'AppSubmitButton',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>
        {AppSubmitButton}
      </Text>
    </View>
  )
}

export default AppSubmitButton

const styles = StyleSheet.create({
  container: {

  },
  textContainer: {

  },
})