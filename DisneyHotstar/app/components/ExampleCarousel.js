import React, { useState ,useRef, useEffect} from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
 
const ExampleCarousel = () => {
  const flatlistRef = useRef();
  const screenwidth = Dimensions.get("window").width;
  const[activeIndex, setActiveIndex] = useState(0);
 
useEffect(()=>{
 
  setInterval(()=>{
    if(activeIndex===carouselData.length-1){
      flatlistRef.current.scrollToIndex({
        index:0,
        animation:true,
      });
    }else{
      flatlistRef.current.scrollToIndex({
        index:activeIndex+1,
        animation:true,
 
      });
    }    
  },2000);
});
 
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
 
    const scrollPosition = event.nativeEvent.contentOffset.x;
    console.log({scrollPosition});
    const index = scrollPosition/screenwidth;
    console.log({index});
    setActiveIndex(index);
 
  };
 
  const renderDotIndicators = () => {
    return carouselData.map((dot, index) => {
      if(activeIndex===index){
        return(
          <View
          style={{
            backgroundColor: "green",
            height: 10,
            width: 10,
            borderRadius: 5,
            marginHorizontal: 6,
          }}
          ></View>
        );
      } else {
        return (
        <View
        key={index}
          style={{
            backgroundColor: "red",
            height: 10,
            width: 10,
            borderRadius: 5,
            marginHorizontal: 6,
          }}
        ></View>
      );
    }
      
    });
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
export default ExampleCarousel;
 