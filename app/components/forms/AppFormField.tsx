//TurtleWolfe.com // //custom components
//AppFormField
//AppFormField // //custom components
//AppFormField
//TurtleWolfe.com // //custom components
import React from 'react'
import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "./AppErrorMessage";

interface AppFormFieldProps {
  name?: string;
  placeholder?: string;
  keyboardType?: string;
  maxLength?: number;
  multiline?: boolean;
  numberOfLines?: number;
  otherProps?: {
    // otherProps?: any;
    // children?: React.ReactNode;
  };
} // typeScript

const AppFormField: React.FC<AppFormFieldProps> = ({
  name,
  ...otherProps
}) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
} // AppFormField component

// const styles = StyleSheet.create({
//   container: {

//   },
//   textContainer: {
//     backgroundColor: 'yellow',
//   },
// }) // style sheet for AppFormField

export default AppFormField
// default export of AppFormField