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
  AppFormPicker?: string;
}

const AppFormPicker: React.FC<AppFormPickerProps> = ({
  alpha,
  beta,
  gamma,
  delta,
  epsilon,
  zeta,
  AppFormPicker = 'AppFormPicker',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>
        {AppFormPicker}
      </Text>
    </View>
  )
}

export default AppFormPicker

const styles = StyleSheet.create({
  container: {

  },
  textContainer: {

  },
})