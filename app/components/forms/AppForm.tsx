//TurtleWolfe.com // //custom components
//AppForm
//AppForm // //custom components
//AppForm
//TurtleWolfe.com // //custom components
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

interface AppFormProps {
  alpha?: string;
  beta?: string;
  gamma?: string[];
  delta?: number;
  epsilon?: number[]
  zeta?: boolean;
  AppForm?: string;
}

const AppForm: React.FC<AppFormProps> = ({
  alpha,
  beta,
  gamma,
  delta,
  epsilon,
  zeta,
  AppForm = 'AppForm',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>
        {AppForm}
      </Text>
    </View>
  )
}

export default AppForm

const styles = StyleSheet.create({
  container: {

  },
  textContainer: {

  },
})