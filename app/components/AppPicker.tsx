//TurtleWolfe.com // //custom components
//AppPicker
//AppPicker // //custom components
//AppPicker
//TurtleWolfe.com // //custom components
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

interface AppPickerProps {
  alpha?: string;
  beta?: string;
  gamma?: string[];
  delta?: number;
  epsilon?: number[]
  zeta?: boolean;
  AppPicker?: string;
}

const AppPicker: React.FC<AppPickerProps> = ({
  alpha,
  beta,
  gamma,
  delta,
  epsilon,
  zeta,
  AppPicker = 'AppPicker',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>
        {AppPicker}
      </Text>
    </View>
  )
}

export default AppPicker

const styles = StyleSheet.create({
  container: {

  },
  textContainer: {

  },
})