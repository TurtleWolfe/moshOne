//TurtleWolfe.com // //custom components
//AppCard
//AppCard // //custom components
//AppCard
//TurtleWolfe.com // //custom components
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

interface AppCardProps {
  alpha?: string;
  beta?: string;
  gamma?: string[];
  delta?: number;
  epsilon?: number[]
  zeta?: boolean;
  children?: Element | React.ReactNode;
  AppCard?: string;
}

const AppCard: React.FC<AppCardProps> = ({
  alpha,
  beta,
  gamma,
  delta,
  epsilon,
  zeta,
  children = <Text>default AppCard</Text>,
  AppCard = 'AppCard',
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

export default AppCard