//TurtleWolfe.com // //custom components
//AppText
//AppText // //custom components
//AppText
//TurtleWolfe.com // //custom components
import React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
} from 'react-native'

interface AppTextProps {
  children?: React.ReactNode[] | string;
  style?: {};
}

const AppText: React.FC<AppTextProps> = ({
  children,
  style,
}) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  container: {

  },
  text: {
    // backgroundColor: 'yellow',
    fontSize: 18,
    // fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontFamily: "CharterRegular",
    // fontWeight: "300", should be a string not a number
    // textDecorationLine: 'line-through'
  },
})

export default AppText