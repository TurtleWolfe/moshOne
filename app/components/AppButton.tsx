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
  children?: Element | React.ReactNode;
  AppButton?: string;
}

const AppButton: React.FC<AppButtonProps> = ({
  alpha,
  beta,
  gamma,
  delta,
  epsilon,
  zeta,
  children = <Text>default AppButton</Text>,
  AppButton = 'AppButton',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>
        {children}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  textContainer: {
    backgroundColor: 'yellow',
  },
})

export default AppButton