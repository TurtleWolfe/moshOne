//TurtleWolfe.com // //custom components
//AppErrorMessage
//AppErrorMessage // //custom components
//AppErrorMessage
//TurtleWolfe.com // //custom components
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

interface AppErrorMessageProps {
  alpha?: string;
  beta?: string;
  gamma?: string[];
  delta?: number;
  epsilon?: number[]
  zeta?: boolean;
  AppErrorMessage?: string;
}

const AppErrorMessage: React.FC<AppErrorMessageProps> = ({
  alpha,
  beta,
  gamma,
  delta,
  epsilon,
  zeta,
  AppErrorMessage = 'AppErrorMessage',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>
        {AppErrorMessage}
      </Text>
    </View>
  )
}

export default AppErrorMessage

const styles = StyleSheet.create({
  container: {

  },
  textContainer: {

  },
})