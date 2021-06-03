//TurtleWolfe.com // //custom components
//AppIcon
//AppIcon // //custom components
//AppIcon
//TurtleWolfe.com // //custom components
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

interface AppIconProps {
  alpha?: string;
  beta?: string;
  gamma?: string[];
  delta?: number;
  epsilon?: number[]
  zeta?: boolean;
  AppIcon?: string;
}

const AppIcon: React.FC<AppIconProps> = ({
  alpha,
  beta,
  gamma,
  delta,
  epsilon,
  zeta,
  AppIcon = 'AppIcon',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>
        {AppIcon}
      </Text>
    </View>
  )
}

export default AppIcon

const styles = StyleSheet.create({
  container: {

  },
  textContainer: {

  },
})