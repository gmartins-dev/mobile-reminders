import { Home } from "@/screens/Home";
import { RemindersFormScreen } from "@/screens/RemindersFormScreen";
import { colors } from "@/theme/colors";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { Provider as JotaiProvider } from "jotai";
import * as React from "react";
import { ActivityIndicator, View } from "react-native";

export type StackNavigatorParams = {
  Reminders: {};
  "Add Reminder": { mode: "Add Reminder" };
  "Edit Reminder": { mode: "Edit Reminder" };
};

type RemindersFormScreenProps = {
  route: RouteProp<StackNavigatorParams, "Add Reminder" | "Edit Reminder">;
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
    <>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <JotaiProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              cardStyle: { backgroundColor: "#FFF" },
            }}
          >
            <Stack.Screen
              name="Reminders"
              component={Home}
              options={{ headerTintColor: colors.pageHeaders }}
            />
            <Stack.Screen
              name="Add Reminder"
              component={RemindersFormScreen}
              initialParams={{ mode: "Add Reminder" }}
              options={{ headerTintColor: colors.pageHeaders }}
            />
            <Stack.Screen
              name="Edit Reminder"
              component={RemindersFormScreen}
              initialParams={{ mode: "Edit Reminder" }}
              options={{ headerTintColor: colors.pageHeaders }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </JotaiProvider>
    </>
  );
}

export default App;
