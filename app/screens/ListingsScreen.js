import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import listingsApi from "../api/listings";

import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "../components/Screen";
import routes from "../navigation/routes";

import ActivityIndicator from "../components/ActivityIndicator";

// const listings = [
//   {
//     id: 1,
//     title: "Red jacket for sale",
//     price: 100,
//     image: require("../assets/jacket.jpg")
//   },
//   {
//     id: 2,
//     title: "Couch in great condition",
//     price: 1000,
//     image: require("../assets/couch.jpg")
//   }
// ];

function ListingsScreen({ navigation }) {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    setLoading(true);
    const response = await listingsApi.getListings();
    setLoading(false);

    setListings(response.data);
  };

  return (
    <Screen style={styles.screen}>
      <ActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: colors.light
  }
});

export default ListingsScreen;
