//TurtleWolfe.com // //custom components
//AppFormPicker
//AppFormPicker // //custom components
//AppFormPicker
//TurtleWolfe.com // //custom components
import React from 'react'
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import ErrorMessage from "./AppErrorMessage";

interface AppFormPickerProps {
  items?: any;
  name?: any;
  placeholder?: string;
} // typeScript

const AppFormPicker: React.FC<AppFormPickerProps> = ({
  items,
  name,
  placeholder,
}) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
} // AppFormPicker component

export default AppFormPicker
// default export of AppFormPicker