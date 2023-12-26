import Home from "@/pages/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import * as React from "react";

const Stack = createNativeStackNavigator();

function App() {
  const [fontLoaded, setFontLoaded] = React.useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Reminders" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

async function loadFonts() {
  await Font.loadAsync({
    Poppins: require("@/assets/fonts/Poppins-Regular.ttf"),
  });
}

export default App;
