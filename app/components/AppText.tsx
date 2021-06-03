//TurtleWolfe.com // //custom components
//AppText
//AppText // //custom components
//AppText
//TurtleWolfe.com // //custom components
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

interface AppTextProps {
  alpha?: string;
  beta?: string;
  gamma?: string[];
  delta?: number;
  epsilon?: number[]
  zeta?: boolean;
  AppText?: string;
}

const AppText: React.FC<AppTextProps> = ({
  alpha,
  beta,
  gamma,
  delta,
  epsilon,
  zeta,
  AppText = 'AppText',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>
        {AppText}
      </Text>
    </View>
  )
}

export default AppText

const styles = StyleSheet.create({
  container: {

  },
  textContainer: {

  },
})