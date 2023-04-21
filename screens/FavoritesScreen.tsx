import { FlatList, StyleSheet } from "react-native";
import { Card } from "../components/Card";
import { useSelector } from "react-redux";

import { Text, View } from "../components/Themed";
import { ApplicationState } from "../state";
import { UnsplashItem } from "../state/images/types";

export default function FavoitesScreen(params: any) {
  const favorites = useSelector(
    (state: ApplicationState) => state.favorites.data
  );

  const renderItem = ({ item }: { item: UnsplashItem }) => (
    <Card
      key={item.id}
      item={item}
      favorite={true}
      navigation={params.navigation}
    />
  );

  return (
    <View style={styles.container}>
      {favorites.length > 0 && (
        <View style={styles.cards}>
          <FlatList
            data={favorites}
            renderItem={renderItem}
            keyExtractor={(image: UnsplashItem) => image.id}
          />
        </View>
      )}

      {favorites.length === 0 && (
        <Text style={styles.title}>It's empty here...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    justifyContent: "center",
  },
  cards: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
  },
  title: {
    width: "100%",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
