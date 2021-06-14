//TurtleWolfe.com // //custom components
//ListingEditScreen
//ListingEditScreen // //custom components
//ListingEditScreen
//TurtleWolfe.com // //custom components
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

interface ListingEditScreenProps {
  alpha?: string;
  beta?: string;
  gamma?: string[];
  delta?: number;
  epsilon?: number[]
  zeta?: boolean;
  children?: React.ReactNode;
  ListingEditScreen?: string;
} // typeScript

const ListingEditScreen: React.FC<ListingEditScreenProps> = ({
  alpha,
  beta,
  gamma,
  delta,
  epsilon,
  zeta,
  children = <Text>default ListingEditScreen</Text>,
  ListingEditScreen = 'ListingEditScreen',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>
        {children}
      </Text>
    </View>
  )
} // ListingEditScreen component

const styles = StyleSheet.create({
  container: {

  },
  textContainer: {
    backgroundColor: 'yellow',
  },
}) // style sheet for ListingEditScreen

export default ListingEditScreen
// default export of ListingEditScreen