import RestaurantCard from "@/components/RestaurantCard";
import React from "react";
import { FlatList, StyleSheet } from "react-native";

const index = () => {
  const restaurantData = [
    { ataTitle: "italian", id: "1", rat: 4 },
    { dataTitle: "food in", id: "1", rat: undefined },
    { dataTitle: "food in", id: "1", rat: undefined },
    { dataTitle: "food in", id: "1", rat: undefined },
    { dataTitle: "food in", id: "1", rat: undefined },
    { dataTitle: "food in", id: "1", rat: undefined },
    { dataTitle: "food in", id: "1", rat: undefined },
    { dataTitle: "food in", id: "1", rat: undefined },
    { dataTitle: "food in", id: "1", rat: undefined },
    { dataTitle: "food in", id: "1", rat: undefined },
    { dataTitle: "food in", id: "1", rat: undefined },
    { dataTitle: "food in", id: "1", rat: undefined },
    { dataTitle: "food in", id: "1", rat: undefined },
    { dataTitle: "food in", id: "1", rat: undefined },
    { dataTitle: "food in", id: "1", rat: undefined },
  ];
  return (
    <FlatList
      data={restaurantData}
      // horizontal
      style={{ marginHorizontal: 20 }}
      contentContainerStyle={{ gap: 20 }}
      renderItem={({ item }) => (
        <RestaurantCard propTitle={item.dataTitle} rate={item.rat} />
      )}
    />
    // <View style={styles.container}>
    //   <View style={styles.cardContainer}>
    //     <View style={styles.innerCardContainer}>
    //       <Image
    //         source={require("../assets/images/li.png")}
    //         style={styles.image}
    //       />
    //       <Text style={{ fontSize: 20 }}> {"Laiba \n zubair"}</Text>
    //     </View>
    //     <TouchableOpacity style={styles.button}>
    //       <Text>BUTTON</Text>
    //     </TouchableOpacity>
    //   </View>
    // </View>
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
