import React, { useState, useRef, useEffect } from "react";
import { Text, View, Image, FlatList, Dimensions, StyleSheet } from "react-native";

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

  return (
    <View style={styles.container}>
      <FlatList
        data={carouselData}
        ref={flatlistRef}
        renderItem={renderitem}
        horizontal={true}
        pagingEnabled={true}
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.dotContainer}>
        {renderDotIndicators()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  dotIndicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginHorizontal: 6,
    bottom:480,
  },
});

export default Carousel;
