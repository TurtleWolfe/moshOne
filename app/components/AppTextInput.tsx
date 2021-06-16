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
  onBlur?: () => void;
  onChangeText?: (e: string | React.ChangeEvent<any>) => void;
  otherProps?: {};
} // typeScript

const AppTextInput: React.FC<AppTextInputProps> = ({
  icon,
  // onBlur,
  // onChangeText,
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