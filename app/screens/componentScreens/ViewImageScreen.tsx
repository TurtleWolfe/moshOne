//TurtleWolfe.com // //custom components
//ViewImageScreen
//ViewImageScreen // //custom components
//ViewImageScreen
//TurtleWolfe.com // //custom components
import React from 'react'
import {
  Image,
  StyleSheet,
  View,
} from 'react-native'

// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import defaultStyles from "../../constants/styles";
import Colors from '../../constants/Colors';

interface ViewImageScreenProps {
  // alpha?: string;
  // beta?: string;
  // gamma?: string[];
  // delta?: number;
  // epsilon?: number[]
  // zeta?: boolean;
  // ViewImageScreen?: string;
}

const ViewImageScreen: React.FC<ViewImageScreenProps> = ({
  // alpha,
  // beta,
  // gamma,
  // delta,
  // epsilon,
  // zeta,
  // ViewImageScreen = 'ViewImageScreen',
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

const styles = StyleSheet.create({
  closeIcon: {
    backgroundColor: Colors.primary,
    height: 50,
    left: 30,
    position: "absolute",
    top: 40,
    width: 50,
  },
  container: {
    backgroundColor: Colors.black,
    flex: 1,
    width: "100%",
  },
  deleteIcon: {
    backgroundColor: Colors.secondary,
    height: 50,
    position: "absolute",
    right: 30,
    top: 40,
    width: 50,
  },
  image: {
    height: "100%",
    width: "100%",
  },
})

export default ViewImageScreen