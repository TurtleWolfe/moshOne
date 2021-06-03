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

interface WelcomeScreenProps {
  alpha?: string;
  beta?: string;
  gamma?: string[];
  delta?: number;
  epsilon?: number[]
  zeta?: boolean;
  WelcomeScreen?: string;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  alpha,
  beta,
  gamma,
  delta,
  epsilon,
  zeta,
  WelcomeScreen = 'WelcomeScreen',
}) => {
  return (
    <ImageBackground
      style={styles.background}
      // source={require("../assets/background.jpg")}
      source={require("../../assets/images/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/logo-red.png")} />
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
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    // width: "100%",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },

})