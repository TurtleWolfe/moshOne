//TurtleWolfe.com // //custom components
//AppTextInput
//AppTextInput // //custom components
//AppTextInput
//TurtleWolfe.com // //custom components
import React from 'react'
import {
  StyleSheet,
  TextInput,
  // TextInputProps,
  // PointPropType,
  View,
} from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../constants/styles";

interface AppTextInputProps {
  icon?: React.ReactNode;
  // gamma?: string[];
  // delta?: number;
  // epsilon?: number[]
  // zeta?: boolean;
  // children?: React.ReactNode;
  // AppTextInput?: string;
  // otherProps?: TextInputProps;
  // otherProps?: PointPropType;
  otherProps?: any;
} // typeScript

const AppTextInput: React.FC<AppTextInputProps> = ({
  icon,
  // gamma,
  // delta,
  // epsilon,
  // zeta,
  // children = <Text>default AppTextInput</Text>,
  // AppTextInput = 'AppTextInput',
  ...otherProps
}) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.palette.mediumGrey}
          style={styles.icon}
        />
      )}
      <TextInput style={defaultStyles.text} {...otherProps} />
    </View>
  )
} // AppTextInput component

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.palette.lightGrey,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
}) // style sheet for AppTextInput

export default AppTextInput
// default export of AppTextInput