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
  children?: React.ReactNode[];
  AppIcon?: string;
}

const AppIcon: React.FC<AppIconProps> = ({
  alpha,
  beta,
  gamma,
  delta,
  epsilon,
  zeta,
  children = <Text>default AppIcon</Text>,
  AppIcon = 'AppIcon',
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

export default AppIcon