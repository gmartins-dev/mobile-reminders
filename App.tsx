import Home from "@/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";
import { ActivityIndicator, View } from "react-native";

const Stack = createNativeStackNavigator();

async function loadFonts() {
  await Font.loadAsync({
    Poppins: require("@/assets/fonts/Poppins-Regular.ttf"),
  });
}

function App() {
  const [fontLoaded, setFontLoaded] = React.useState(false);

  React.useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await loadFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        await SplashScreen.hideAsync();
        setFontLoaded(true);
      }
    }

    prepare();
  }, []);

  if (!fontLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
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

export default App;
