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
  AppFormField?: string;
}

const AppFormField: React.FC<AppFormFieldProps> = ({
  alpha,
  beta,
  gamma,
  delta,
  epsilon,
  zeta,
  AppFormField = 'AppFormField',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>
        {AppFormField}
      </Text>
    </View>
  )
}

export default AppFormField

const styles = StyleSheet.create({
  container: {

  },
  textContainer: {

  },
})