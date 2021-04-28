import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Pressable, StyleSheet } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { ANIME_CONSTANTS } from "../../constants";

interface AnimeThumbnailProps {
  item: any;
}

const AnimeThumbnail: React.FC<AnimeThumbnailProps> = React.memo(({ item }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate("Detail", { item })}
      style={styles.card}
    >
      <SharedElement id={`item.${item.id}.poster`} style={styles.image}>
        <Image
          resizeMode="cover"
          source={{ uri: item.attributes.posterImage.large }}
          style={[StyleSheet.absoluteFill, { borderRadius: RADIUS }]}
        />
      </SharedElement>
    </Pressable>
  );
});

const { ITEM_WIDTH, RADIUS } = ANIME_CONSTANTS;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: ITEM_WIDTH,
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  text: {
    color: "#000",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
});

export default AnimeThumbnail;
