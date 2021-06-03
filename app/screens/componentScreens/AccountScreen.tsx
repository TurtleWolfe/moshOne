//TurtleWolfe.com // //custom components
//AccountScreen
//AccountScreen // //custom components
//AccountScreen
//TurtleWolfe.com // //custom components
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface AccountScreenProps {
  alpha?: string;
  beta?: string;
  gamma?: string[];
  delta?: number;
  epsilon?: number[]
  zeta?: boolean;
  AccountScreen?: string;
}

const AccountScreen: React.FC<AccountScreenProps> = ({
  alpha,
  beta,
  gamma,
  delta,
  epsilon,
  zeta,
  AccountScreen = 'AccountScreen',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>
        {AccountScreen}
      </Text>
    </View>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
  container: {

  },
  textContainer: {

  },
})