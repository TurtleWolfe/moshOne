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
  AppCard?: string;
}

const AppCard: React.FC<AppCardProps> = ({
  alpha,
  beta,
  gamma,
  delta,
  epsilon,
  zeta,
  AppCard = 'AppCard',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>
        {AppCard}
      </Text>
    </View>
  )
}

export default AppCard

const styles = StyleSheet.create({
  container: {

  },
  textContainer: {

  },
})