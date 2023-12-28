import { Home } from "@/screens/Home";
import { RemindersFormScreen } from "@/screens/RemindersFormScreen";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { ActivityIndicator, View } from "react-native";

export type StackNavigatorParams = {
  Home: {};
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
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            cardStyle: { backgroundColor: "#FFF" },
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="Add Reminder"
            component={RemindersFormScreen}
            initialParams={{ mode: "Add Reminder" }}
          />
          <Stack.Screen
            name="Edit Reminder"
            component={RemindersFormScreen}
            initialParams={{ mode: "Edit Reminder" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
