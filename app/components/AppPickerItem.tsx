//TurtleWolfe.com // //custom components
//AppPickerItem
//AppPickerItem // //custom components
//AppPickerItem
//TurtleWolfe.com // //custom components
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

interface AppPickerItemProps {
  alpha?: string;
  beta?: string;
  gamma?: string[];
  delta?: number;
  epsilon?: number[]
  zeta?: boolean;
  AppPickerItem?: string;
}

const AppPickerItem: React.FC<AppPickerItemProps> = ({
  alpha,
  beta,
  gamma,
  delta,
  epsilon,
  zeta,
  AppPickerItem = 'AppPickerItem',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>
        {AppPickerItem}
      </Text>
    </View>
  )
}

export default AppPickerItem

const styles = StyleSheet.create({
  container: {

  },
  textContainer: {

  },
})