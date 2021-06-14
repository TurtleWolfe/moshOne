//TurtleWolfe.com // //custom components
//RegisterScreen
//RegisterScreen // //custom components
//RegisterScreen
//TurtleWolfe.com // //custom components
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

interface RegisterScreenProps {
  alpha?: string;
  beta?: string;
  gamma?: string[];
  delta?: number;
  epsilon?: number[]
  zeta?: boolean;
  children?: React.ReactNode;
  RegisterScreen?: string;
} // typeScript

const RegisterScreen: React.FC<RegisterScreenProps> = ({
  alpha,
  beta,
  gamma,
  delta,
  epsilon,
  zeta,
  children = <Text>default RegisterScreen</Text>,
  RegisterScreen = 'RegisterScreen',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>
        {children}
      </Text>
    </View>
  )
} // RegisterScreen component

const styles = StyleSheet.create({
  container: {

  },
  textContainer: {
    backgroundColor: 'yellow',
  },
}) // style sheet for RegisterScreen

export default RegisterScreen
// default export of RegisterScreen