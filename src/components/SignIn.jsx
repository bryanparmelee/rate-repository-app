import { Pressable, View, StyleSheet } from "react-native";
import { Formik } from "formik";

import FormikTextInput from "./FormikTextInput";
import Text from "./Text";

import theme from "../theme";

const SignInForm = ({ onSubmit }) => {
  const styles = StyleSheet.create({
    container: {
      display: "flex",
      gap: 8,
      padding: 8,
    },
    submitButton: {
      padding: 4,
      backgroundColor: theme.colors.primary,
      borderRadius: 5,
    },
  });
  return (
    <View style={styles.container}>
      <Text fontWeight={"bold"}>Sign-in</Text>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput
        name="password"
        placeholder="Password"
        secureTextEntry={true}
      />
      <Pressable style={styles.submitButton} onPress={onSubmit}>
        <Text color={"white"}>Submit</Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const initialValues = {
    username: "",
    password: "",
  };
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
