//TurtleWolfe.com // //custom components
//MessagesScreen
//MessagesScreen // //custom components
//MessagesScreen
//TurtleWolfe.com // //custom components
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

interface MessagesScreenProps {
  alpha?: string;
  beta?: string;
  gamma?: string[];
  delta?: number;
  epsilon?: number[]
  zeta?: boolean;
  children?: React.ReactNode[];
  MessagesScreen?: string;
}

const MessagesScreen: React.FC<MessagesScreenProps> = ({
  alpha,
  beta,
  gamma,
  delta,
  epsilon,
  zeta,
  children = <Text>default MessagesScreen</Text>,
  MessagesScreen = 'MessagesScreen',
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

export default MessagesScreen