//TurtleWolfe.com // //custom components
//AppFormPicker
//AppFormPicker // //custom components
//AppFormPicker
//TurtleWolfe.com // //custom components
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

interface AppFormPickerProps {
  alpha?: string;
  beta?: string;
  gamma?: string[];
  delta?: number;
  epsilon?: number[]
  zeta?: boolean;
  children?: React.ReactNode;
  AppFormPicker?: string;
} // typeScript

const AppFormPicker: React.FC<AppFormPickerProps> = ({
  alpha,
  beta,
  gamma,
  delta,
  epsilon,
  zeta,
  children = <Text>default AppFormPicker</Text>,
  AppFormPicker = 'AppFormPicker',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>
        {children}
      </Text>
    </View>
  )
} // AppFormPicker component

const styles = StyleSheet.create({
  container: {

  },
  textContainer: {
    backgroundColor: 'yellow',
  },
}) // style sheet for AppFormPicker

export default AppFormPicker
// default export of AppFormPicker