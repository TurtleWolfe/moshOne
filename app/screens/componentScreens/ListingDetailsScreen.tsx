//TurtleWolfe.com // //custom components
//ListingDetailsScreen
//ListingDetailsScreen // //custom components
//ListingDetailsScreen
//TurtleWolfe.com // //custom components
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface ListingDetailsScreenProps {
  alpha?: string;
  beta?: string;
  gamma?: string[];
  delta?: number;
  epsilon?: number[]
  zeta?: boolean;
  ListingDetailsScreen?: string;
}

const ListingDetailsScreen: React.FC<ListingDetailsScreenProps> = ({
  alpha,
  beta,
  gamma,
  delta,
  epsilon,
  zeta,
  ListingDetailsScreen = 'ListingDetailsScreen',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>
        {ListingDetailsScreen}
      </Text>
    </View>
  )
}

export default ListingDetailsScreen

const styles = StyleSheet.create({
  container: {

  },
  textContainer: {

  },
})