//TurtleWolfe.com // //custom components
//AppCategoryPickerItem
//AppCategoryPickerItem // //custom components
//AppCategoryPickerItem
//TurtleWolfe.com // //custom components
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

interface AppCategoryPickerItemProps {
  alpha?: string;
  beta?: string;
  gamma?: string[];
  delta?: number;
  epsilon?: number[]
  zeta?: boolean;
  AppCategoryPickerItem?: string;
}

const AppCategoryPickerItem: React.FC<AppCategoryPickerItemProps> = ({
  alpha,
  beta,
  gamma,
  delta,
  epsilon,
  zeta,
  AppCategoryPickerItem = 'AppCategoryPickerItem',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>
        {AppCategoryPickerItem}
      </Text>
    </View>
  )
}

export default AppCategoryPickerItem

const styles = StyleSheet.create({
  container: {

  },
  textContainer: {

  },
})