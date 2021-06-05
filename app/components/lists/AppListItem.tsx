//TurtleWolfe.com // //custom components
//AppListItem
//AppListItem // //custom components
//AppListItem
//TurtleWolfe.com // //custom components
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

interface AppListItemProps {
  alpha?: string;
  beta?: string;
  gamma?: string[];
  delta?: number;
  epsilon?: number[]
  zeta?: boolean;
  children?: Element | React.ReactNode;
  AppListItem?: string;
}

const AppListItem: React.FC<AppListItemProps> = ({
  alpha,
  beta,
  gamma,
  delta,
  epsilon,
  zeta,
  children = <Text>default AppListItem</Text>,
  AppListItem = 'AppListItem',
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

export default AppListItem