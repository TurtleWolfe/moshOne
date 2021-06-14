//TurtleWolfe.com // //custom components
//AppFormField
//AppFormField // //custom components
//AppFormField
//TurtleWolfe.com // //custom components
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

interface AppFormFieldProps {
  alpha?: string;
  beta?: string;
  gamma?: string[];
  delta?: number;
  epsilon?: number[]
  zeta?: boolean;
  children?: React.ReactNode;
  AppFormField?: string;
} // typeScript

const AppFormField: React.FC<AppFormFieldProps> = ({
  alpha,
  beta,
  gamma,
  delta,
  epsilon,
  zeta,
  children = <Text>default AppFormField</Text>,
  AppFormField = 'AppFormField',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>
        {children}
      </Text>
    </View>
  )
} // AppFormField component

const styles = StyleSheet.create({
  container: {

  },
  textContainer: {
    backgroundColor: 'yellow',
  },
}) // style sheet for AppFormField

export default AppFormField
// default export of AppFormField