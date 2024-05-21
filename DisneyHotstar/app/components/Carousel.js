import React, { useState ,useRef, useEffect} from "react";
import { StyleSheet, Text, View, Image, FlatList, Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";

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
      <View>
        <Image source={item.image} style={{ height: 250, width: screenwidth }} />
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
        style={{
          backgroundColor: activeIndex === index ? "white" : "darkgray",
          height: 10,
          width: 10,
          borderRadius: 5,
          marginHorizontal: 6,
          marginTop: 10 ,
        }}
      ></View>
    ));
  };

  return (
    <View>
      <Text>Carousel</Text>
      <FlatList
        data={carouselData}
        ref={flatlistRef}
        renderItem={renderitem}
        horizontal={true}
        pagingEnabled={true}
        onScroll={handleScroll}
      />
      <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 30 }}>
        {renderDotIndicators()}
      </View>
    </View>
  );
};
export default Carousel;

