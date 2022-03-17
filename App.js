import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./src/stacks/mainStack";
import { ApplicationProvider } from "./src/context/application";

export default function App() {
  return (
    <ApplicationProvider>
      <NavigationContainer>
        <StatusBar style="dark" hidden={true} />
        <MainStack />
      </NavigationContainer>
    </ApplicationProvider>
  );
}
