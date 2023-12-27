import Home from "@/screens/Home";
import ReminderFormScreen from "@/screens/ReminderFormScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";
import { ActivityIndicator, View } from "react-native";

export type StackNavigatorParams = {
  'Home': undefined;
  "Add Reminder": { mode: string };
  "Edit Reminder": { mode: string };
};

const Stack = createStackNavigator<StackNavigatorParams>();

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
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Add Reminder"
          component={ReminderFormScreen}
          initialParams={{ mode: "Add Reminder" }}
        />
        <Stack.Screen
          name="Edit Reminder"
          component={ReminderFormScreen}
          initialParams={{ mode: "Edit Reminder" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
