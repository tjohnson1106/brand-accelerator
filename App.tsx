import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/stack";

import Onboarding from "./src/Authentication/Onboarding";

const AuthenticationStack = createStackNavigator();

const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator>
      <AuthenticationStack.Screen name="OnBoarding" component={OnBoarding} />
    </AuthenticationStack.Navigator>
  );
};

export default function App() {
  return <View>{}</View>;
}
