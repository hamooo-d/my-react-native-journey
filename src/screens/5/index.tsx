import React from "react";
import { enableScreens } from "react-native-screens";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import AnimeDetails from "./AnimeDetails";
import AnimeList from "./AnimeList";

export type StackProps = {
  List: undefined;
  Detail: { item: any };
};

enableScreens();

const Stack = createSharedElementStackNavigator<StackProps>();

const SharedAnimations: React.FC = () => {
  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={{
        title: "Anime List",
        headerTitleAlign: "center",
        gestureEnabled: false,
        headerStyle: {
          backgroundColor: "#f9dc5c",
        },
      }}
    >
      <Stack.Screen component={AnimeList} name="List" />
      <Stack.Screen
        component={AnimeDetails}
        name="Detail"
        sharedElements={({ params: { item } }) => {
          return [
            {
              id: `item.${item.id}.poster`,
            },
            {
              id: `item.${item.id}.title`,
            },
          ];
        }}
      />
    </Stack.Navigator>
  );
};

export default SharedAnimations;
