//TurtleWolfe.com // //custom components
//WelcomeScreen
//WelcomeScreen // //custom components
//WelcomeScreen
//TurtleWolfe.com // //custom components
import React from 'react'
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native'

import Colors from '../../constants/Colors';

interface WelcomeScreenProps {
  // alpha?: string;
  // beta?: string;
  // gamma?: string[];
  // delta?: number;
  // epsilon?: number[]
  // zeta?: boolean;
  // WelcomeScreen?: string;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  // alpha,
  // beta,
  // gamma,
  // delta,
  // epsilon,
  // zeta,
  // WelcomeScreen = 'WelcomeScreen',
}) => {
  return (
    <ImageBackground
      blurRadius={3}
      style={styles.background}
      source={require("../../assets/images/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/logo-red.png")}
        />
        <Text>Sell What You Don't Need</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  background: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
  },
  loginButton: {
    backgroundColor: Colors.primary,
    height: 70,
    width: "100%",
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 70,
  },
  registerButton: {
    backgroundColor: Colors.secondary,
    height: 70,
    width: "100%",
  },
})