//TurtleWolfe.com // //custom components
//LoginScreen
//LoginScreen // //custom components
//LoginScreen
//TurtleWolfe.com // //custom components
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

interface LoginScreenProps {
  alpha?: string;
  beta?: string;
  gamma?: string[];
  delta?: number;
  epsilon?: number[]
  zeta?: boolean;
  children?: React.ReactNode;
  LoginScreen?: string;
} // typeScript

const LoginScreen: React.FC<LoginScreenProps> = ({
  alpha,
  beta,
  gamma,
  delta,
  epsilon,
  zeta,
  children = <Text>default LoginScreen</Text>,
  LoginScreen = 'LoginScreen',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>
        {children}
      </Text>
    </View>
  )
} // LoginScreen component

const styles = StyleSheet.create({
  container: {

  },
  textContainer: {
    backgroundColor: 'yellow',
  },
}) // style sheet for LoginScreen

export default LoginScreen
// default export of LoginScreen