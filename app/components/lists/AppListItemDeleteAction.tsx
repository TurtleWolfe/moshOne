//TurtleWolfe.com // //custom components
//AppListItemDeleteAction
//AppListItemDeleteAction // //custom components
//AppListItemDeleteAction
//TurtleWolfe.com // //custom components
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

interface AppListItemDeleteActionProps {
  alpha?: string;
  beta?: string;
  gamma?: string[];
  delta?: number;
  epsilon?: number[]
  zeta?: boolean;
  children?: React.ReactNode[];
  AppListItemDeleteAction?: string;
}

const AppListItemDeleteAction: React.FC<AppListItemDeleteActionProps> = ({
  alpha,
  beta,
  gamma,
  delta,
  epsilon,
  zeta,
  children = <Text>default AppListItemDeleteAction</Text>,
  AppListItemDeleteAction = 'AppListItemDeleteAction',
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

export default AppListItemDeleteAction