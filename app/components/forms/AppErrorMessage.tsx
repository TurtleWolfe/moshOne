//TurtleWolfe.com // //custom components
//AppErrorMessage
//AppErrorMessage // //custom components
//AppErrorMessage
//TurtleWolfe.com // //custom components
import React from 'react'
import {
  StyleSheet,
} from 'react-native'

import AppText from "../../components/AppText";

interface AppErrorMessageProps {
  error?: any;
  visible?: boolean;
} // typeScript

const AppErrorMessage: React.FC<AppErrorMessageProps> = ({
  error,
  visible,
}) => {
  if (!visible || !error) return null;

  return <AppText style={styles.error}>{error}</AppText>;
} // AppErrorMessage component

const styles = StyleSheet.create({
  error: { color: "red" },
}) // style sheet for AppErrorMessage

export default AppErrorMessage
// default export of AppErrorMessage