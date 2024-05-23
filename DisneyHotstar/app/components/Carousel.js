import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import MovieList from "./MovieList";
import MovieLists from "./MovieLists";

const Carousel = () => {
  const flatlistRef = useRef();
  const screenwidth = Dimensions.get("window").width;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeIndex === carouselData.length - 1) {
        flatlistRef.current.scrollToIndex({
          index: 0,
          animated: true,
        });
      } else {
        flatlistRef.current.scrollToIndex({
          index: activeIndex + 1,
          animated: true,
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const carouselData = [
    { id: "01", image: require("../../assets/1.webp") },
    { id: "02", image: require("../../assets/2.webp") },
    { id: "03", image: require("../../assets/3.webp") },
    { id: "04", image: require("../../assets/4.webp") },
  ];

  const renderitem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.gradientOverlay} />
      </View>
    );
  };

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / screenwidth);
    setActiveIndex(index);
  };

  const renderDotIndicators = () => {
    return carouselData.map((dot, index) => (
      <View
        key={index}
        style={[
          styles.dotIndicator,
          { backgroundColor: activeIndex === index ? "white" : "darkgray" },
        ]}
      ></View>
    ));
  };

  const handleSubscribePress = () => {};

  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={carouselData}
        ref={flatlistRef}
        renderItem={renderitem}
        horizontal={true}
        pagingEnabled={true}
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}
      />

      <Text style={styles.tagText}>Family . Comedy . Action . Adventure</Text>
      <TouchableOpacity
        style={styles.subscribeButton}
        onPress={handleSubscribePress}
      >
        <Text style={styles.subscribeText}>Subscribe to Watch</Text>
      </TouchableOpacity>
      <View style={styles.dotContainer}>{renderDotIndicators()}</View>
      <MovieList />
      <MovieLists />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  itemContainer: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    height: 320,
    width: Dimensions.get("window").width,
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 16,
  },
  dotIndicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginHorizontal: 6,
  },
  subscribeButton: {
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 14,
    backgroundColor: "rgba(250, 247, 251, 0.2)",
    bottom: 0,
    alignSelf: "center",
    zIndex: 1,
  },
  subscribeText: {
    color: "white",
    fontSize: 16,
  },
  tagText: {
    paddingVertical: 16,
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    top: 250,
    left: 0,
    right: 0,
    height: "30%",
    backgroundColor: "rgba(0, 0, 0, 0.0)",
  },
});
export default Carousel;
