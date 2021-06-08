//TurtleWolfe.com // //custom components
//ListingsScreen
//ListingsScreen // //custom components
//ListingsScreen
//TurtleWolfe.com // //custom components
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

interface ListingsScreenProps {
  alpha?: string;
  beta?: string;
  gamma?: string[];
  delta?: number;
  epsilon?: number[]
  zeta?: boolean;
  children?: React.ReactNode[];
  ListingsScreen?: string;
}

const ListingsScreen: React.FC<ListingsScreenProps> = ({
  alpha,
  beta,
  gamma,
  delta,
  epsilon,
  zeta,
  children = <Text>default ListingsScreen</Text>,
  ListingsScreen = 'ListingsScreen',
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

export default ListingsScreen