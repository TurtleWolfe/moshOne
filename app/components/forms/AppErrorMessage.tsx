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
  children?: React.ReactNode;
  AppErrorMessage?: string;
} // typeScript

const AppErrorMessage: React.FC<AppErrorMessageProps> = ({
  alpha,
  beta,
  gamma,
  delta,
  epsilon,
  zeta,
  children = <Text>default AppErrorMessage</Text>,
  AppErrorMessage = 'AppErrorMessage',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>
        {children}
      </Text>
    </View>
  )
} // AppErrorMessage component

const styles = StyleSheet.create({
  container: {

  },
  textContainer: {
    backgroundColor: 'yellow',
  },
}) // style sheet for AppErrorMessage

export default AppErrorMessage
// default export of AppErrorMessage