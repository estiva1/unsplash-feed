import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Share,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Animated,
  GestureResponderEvent,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
} from "../store/favorites/favorites.actions";
import { Text, View } from "../components/Themed";
import { Ionicons } from "@expo/vector-icons";
import { UnsplashItem } from "../store/images/images.types";
import { getImageSrc } from "../utils/images/images.utils";
import { ApplicationState } from "../store/root-reducer";

export function Card(props: {
  key: string;
  favorite: boolean;
  item: UnsplashItem;
  navigation: any;
}) {
  const id = props.item.id;
  let isUnmounted = false;

  const dispatch = useDispatch();

  const onShare = async () => {
    try {
      const description = props.item.description
        ? `\n${props.item.description}`
        : "";

      await Share.share({
        message: `Check out this cool picture at Unsplash:\n\n${props.item.links.html}${description}`,
      });
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log("Unexpected error", error);
      }
    }
  };

  let [loading, setLoading] = useState(true);

  const favorites = useSelector(
    (state: ApplicationState) => state.favorites.data
  );

  useEffect(() => {
    if (favorites.find((image: UnsplashItem) => image.id === id) === undefined)
      setFavorite(false);
  }, [favorites]);

  useEffect(() => {
    return () => {
      isUnmounted = true;
    };
  }, []);

  const handleImageClicked = (event: GestureResponderEvent) => {
    props.navigation.navigate("ViewImage", { item: props.item });
  };

  const handleHeartPressed = (event: GestureResponderEvent) => {
    if (!isFavorite) {
      dispatch(addFavorite(props.item));
    } else {
      dispatch(removeFavorite(props.item));
    }

    setFavorite(!isFavorite);
  };

  const [isFavorite, setFavorite] = useState(props.favorite);

  return (
    <View style={styles.container}>
      {loading && (
        <ActivityIndicator size="large" animating={loading} color="#3396dc" />
      )}

      <Animated.View
        style={{
          width: "100%",
          height: "100%",
          maxHeight: loading ? 0 : "100%",
        }}
      >
        {!loading && <Text style={styles.credits}>{props.item.user.name}</Text>}

        {!loading && (
          <Text numberOfLines={1} style={styles.description}>
            {props.item.description || "No description"}
          </Text>
        )}

        {!loading && (
          <Text style={styles.likes}>
            <Ionicons
              style={{ width: 20 }}
              name="thumbs-up-sharp"
              color={"#ffffff"}
              size={16}
            />
            &nbsp;
            {props.item.likes}
          </Text>
        )}

        <ImageBackground
          source={{ uri: getImageSrc(props.item) }}
          style={styles.image}
          onLoad={() => {
            if (!isUnmounted) setLoading(false);
          }}
        >
          {!loading && (
            <View
              style={{
                backgroundColor: "transparent",
                flex: 1,
                justifyContent: "flex-end",
                alignItems: "flex-end",
                flexDirection: "row",
                marginRight: 20,
                marginBottom: 20,
              }}
            >
              <TouchableOpacity
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                }}
                onPress={handleImageClicked}
              />
              <TouchableOpacity onPress={onShare}>
                <Ionicons
                  style={{ marginRight: 10 }}
                  name={"share-social"}
                  color={"#fff"}
                  size={24}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleHeartPressed}>
                <Ionicons
                  style={{}}
                  name={isFavorite ? "heart-sharp" : "heart-outline"}
                  color={"#ff0000"}
                  size={24}
                />
              </TouchableOpacity>
            </View>
          )}
        </ImageBackground>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "90%",
    minHeight: 220,
    height: 220,
    marginBottom: 15,
    backgroundColor: "lightgray",
    borderRadius: 2,
    overflow: "hidden",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 7,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    zIndex: -1,
  },

  likes: {
    position: "absolute",
    right: 15,
    top: 15,
    fontSize: 16,
    fontWeight: "normal",
    textShadowColor: "#000",
    textShadowRadius: 4,
    color: "white",
  },

  description: {
    position: "absolute",
    width: "60%",
    left: 15,
    top: 15,
    fontSize: 16,
    fontWeight: "normal",
    textShadowColor: "#000",
    textShadowRadius: 4,
    fontStyle: "italic",
    color: "white",
  },

  credits: {
    position: "absolute",
    left: 15,
    bottom: 15,
    fontSize: 16,
    fontWeight: "normal",
    textShadowColor: "#000",
    textShadowRadius: 4,
    fontStyle: "italic",
    color: "white",
  },
});
