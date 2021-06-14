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
  children?: React.ReactNode;
  AppSubmitButton?: string;
} // typeScript

const AppSubmitButton: React.FC<AppSubmitButtonProps> = ({
  alpha,
  beta,
  gamma,
  delta,
  epsilon,
  zeta,
  children = <Text>default AppSubmitButton</Text>,
  AppSubmitButton = 'AppSubmitButton',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>
        {children}
      </Text>
    </View>
  )
} // AppSubmitButton component

const styles = StyleSheet.create({
  container: {

  },
  textContainer: {
    backgroundColor: 'yellow',
  },
}) // style sheet for AppSubmitButton

export default AppSubmitButton
// default export of AppSubmitButton