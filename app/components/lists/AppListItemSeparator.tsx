//TurtleWolfe.com // //custom components
//AppListItemSeparator
//AppListItemSeparator // //custom components
//AppListItemSeparator
//TurtleWolfe.com // //custom components
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

interface AppListItemSeparatorProps {
  alpha?: string;
  beta?: string;
  gamma?: string[];
  delta?: number;
  epsilon?: number[]
  zeta?: boolean;
  children?: React.ReactNode[];
  AppListItemSeparator?: string;
}

const AppListItemSeparator: React.FC<AppListItemSeparatorProps> = ({
  alpha,
  beta,
  gamma,
  delta,
  epsilon,
  zeta,
  children = <Text>default AppListItemSeparator</Text>,
  AppListItemSeparator = 'AppListItemSeparator',
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

export default AppListItemSeparator