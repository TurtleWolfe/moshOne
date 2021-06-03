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
  AppListItem?: string;
}

const AppListItem: React.FC<AppListItemProps> = ({
  alpha,
  beta,
  gamma,
  delta,
  epsilon,
  zeta,
  AppListItem = 'AppListItem',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>
        {AppListItem}
      </Text>
    </View>
  )
}

export default AppListItem

const styles = StyleSheet.create({
  container: {

  },
  textContainer: {

  },
})