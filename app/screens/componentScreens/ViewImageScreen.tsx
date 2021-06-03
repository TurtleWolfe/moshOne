//TurtleWolfe.com // //custom components
//ViewImageScreen
//ViewImageScreen // //custom components
//ViewImageScreen
//TurtleWolfe.com // //custom components
import React from 'react'
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native'

// import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../../constants/styles";

interface ViewImageScreenProps {
  alpha?: string;
  beta?: string;
  gamma?: string[];
  delta?: number;
  epsilon?: number[]
  zeta?: boolean;
  ViewImageScreen?: string;
}

const ViewImageScreen: React.FC<ViewImageScreenProps> = ({
  alpha,
  beta,
  gamma,
  delta,
  epsilon,
  zeta,
  ViewImageScreen = 'ViewImageScreen',
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../../assets/images/chair.jpg")}
      />
    </View>
  )
}

export default ViewImageScreen

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: defaultStyles.colors.primary,
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: defaultStyles.colors.black,
    flex: 1,
    width: "100%",
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: defaultStyles.colors.secondary,
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
})