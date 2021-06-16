//TurtleWolfe.com // //custom components
//LoginScreen
//LoginScreen // //custom components
//LoginScreen
//TurtleWolfe.com // //custom components
import React from 'react'
import {
  Image,
  StyleSheet,
  Text,
  // View,
} from 'react-native'
import * as Yup from "yup";

import Screen from "../../components/AppScreen";
import {
  AppForm,
  AppFormField,
  AppSubmitButton
} from "../../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});// .matches() for regular expression

interface LoginScreenProps {
  alpha?: string;
  beta?: string;
  gamma?: string[];
  delta?: number;
  epsilon?: number[]
  zeta?: boolean;
  children?: React.ReactNode;
  LoginScreen?: string;
} // typeScript

const LoginScreen: React.FC<LoginScreenProps> = ({
  alpha,
  beta,
  gamma,
  delta,
  epsilon,
  zeta,
  children = <Text>default LoginScreen</Text>,
  LoginScreen = 'LoginScreen',
}) => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo}
        source={require("../../assets/images/Turtlewolfe.png")} />

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <AppSubmitButton title="Login" />
      </AppForm>
    </Screen>
  )
} // LoginScreen component

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
}) // style sheet for LoginScreen

export default LoginScreen
// default export of LoginScreen