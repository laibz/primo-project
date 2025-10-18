import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import RestaurantCard from "../components/RestaurantCard";

const index = () => {
  const restaurantData = [
    { dataTitle: "italian", id: "1", rat: 4 },
    { dataTitle: "food in", id: "2", rat: undefined },
    { dataTitle: "food in", id: "3", rat: undefined },
  ];
  const [restaurantDataState, setRestaurantDataState] =
    useState(restaurantData);
  console.log(restaurantData);
  return (
    <View>
      <TouchableOpacity
        style={{ alignSelf: "center", backgroundColor: "pink" }}
        children={<Text>AddItem</Text>}
        onPress={() => {
          /* restaurantData.filter(restaurantData.dataTitle ==) */

          setRestaurantDataState((prev) => {
            return prev.filter((item) => item.dataTitle !== "food in");
          });

          // console.log(restaurantData);
        }}
      />

      <FlatList
        data={restaurantDataState}
        // horizontal
        keyExtractor={(item) => item.id}
        style={{ marginHorizontal: 20 }}
        contentContainerStyle={{ gap: 20 }}
        renderItem={({ item }) => (
          <RestaurantCard propTitle={item.dataTitle} rate={item.rat} />
        )}
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  cardContainer: {
    paddingVertical: 40,
    marginHorizontal: 20,
    backgroundColor: "blue",
    borderRadius: 50,
    gap: 20,
    justifyContent: "center",
  },
  container: { flex: 1, backgroundColor: "black", justifyContent: "center" },
  // cardContainer: {
  //   paddingVertical: 40,
  //   marginHorizontal: 20,
  //   backgroundColor: "blue",
  //   borderRadius: 50,
  //   gap: 20,
  //   justifyContent: "center",
  // },
  innerCardContainer: {
    paddingVertical: 40,
    marginHorizontal: 20,
    backgroundColor: "blue",
    borderRadius: 50,
    gap: 20,
    justifyContent: "center",
  },
  button: {
    paddingVertical: 20,
    backgroundColor: "purple",
    borderRadius: 50,
    alignItems: "center",
    marginHorizontal: 20,
  },
  image: { width: 100, height: 100, borderRadius: 100 },
});
