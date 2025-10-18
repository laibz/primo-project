import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const RestaurantCard = ({ propTitle = "default Value", rate = 4 }) => {
  const [back, setBackgroundColor] = useState("red");
  console.log("Changes");
  return (
    <TouchableOpacity
      onPress={() => {
        setBackgroundColor(back == "white" ? "black" : "white");
      }}
      style={styles.container}
    >
      <Image
        resizeMode="cover"
        source={{
          uri: "https://www.recipetineats.com/tachyon/2014/06/Pasta1.jpg",
        }}
        style={styles.image}
      />
      <View style={[styles.bottomContainer, { backgroundColor: back }]}>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{propTitle} </Text>
          <Text> star rating {rate}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.subTitleText}>cafe </Text>
          <Text> r rating </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  container: { backgroundColor: "green" },
  image: { width: "100%", height: 150 },
  bottomContainer: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 5,
  },
  textContainer: { flexDirection: "row", justifyContent: "space-between" },
  titleText: { fontSize: 18, fontWeight: 600 },
  subTitleText: { fontSize: 16, color: "grey" },
});
