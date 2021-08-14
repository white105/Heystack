import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, FlatList } from "react-native"




const slideList = Array.from({ length: 5 }).map((_, i) => {
  return {
    id: i,
    image: `https://picsum.photos/1440/2842?random=${i}`,
  };
});


function Slide({ data }) {
  return (
    <View
      style={{
        justifyContent: "center",
      }}
    >
      <Image
        source={{ uri: data.image }}
        style={{ alignSelf: 'center', height: 200, width: 200, borderWidth: 1,    borderRadius: 15 }}
        
      ></Image>

    </View>
  );
}

export default function CarouselImage() {
  return (
    <FlatList
      data={slideList}
      style={{ flex: 1 }}
      renderItem={({ item }) => {
        return <Slide data={item} />;
      }}
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={true}
    />
  );
}