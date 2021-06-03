//TurtleWolfe.com // //custom components
//ListingEditScreen
//ListingEditScreen // //custom components
//ListingEditScreen
//TurtleWolfe.com // //custom components
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface ListingEditScreenProps {
  alpha?: string;
  beta?: string;
  gamma?: string[];
  delta?: number;
  epsilon?: number[]
  zeta?: boolean;
  ListingEditScreen?: string;
}

const ListingEditScreen: React.FC<ListingEditScreenProps> = ({
  alpha,
  beta,
  gamma,
  delta,
  epsilon,
  zeta,
  ListingEditScreen = 'ListingEditScreen',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>
        {ListingEditScreen}
      </Text>
    </View>
  )
}

export default ListingEditScreen

const styles = StyleSheet.create({
  container: {

  },
  textContainer: {

  },
})