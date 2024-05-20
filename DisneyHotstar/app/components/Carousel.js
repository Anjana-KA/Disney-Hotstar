import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
} from "react-native";

const Carousel = () => {
  const screenwidth = Dimensions.get("window").width;
  const carouselData = [
    {
      id: "01",
      image: require("../../assets/1.webp"),
    },
    {
      id: "02",
      image: require("../../assets/2.webp"),
    },
    {
      id: "03",
      image: require("../../assets/3.webp"),
    },
  ];

  const renderitem = ({ item, index }) => {
    return (
      <View>
        <Image
          source={item.image}
          style={{ height: 200, width: screenwidth }}
        />
      </View>
    );
  };

  const handleScroll = ({ event }) => {


  };

  const renderDotIndicators = () => {
    return carouselData.map((dot, index) => {
      return (
        <View
          style={{
            backgroundColor: "red",
            height: 10,
            width: 10,
            borderRadius: 5,
            marginHorizontal: 6,
          }}
        ></View>
      );
    });
  };

  return (
    <View>
      <Text>Carousel</Text>
      <FlatList
        data={carouselData}
        renderItem={renderitem}
        horizontal={true}
        pagingEnabled={true}
        onScroll={handleScroll}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 30,
        }}
      >
        {renderDotIndicators()}
      </View>
    </View>
  );
};
export default Carousel;
