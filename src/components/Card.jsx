import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const Card = ({ imgURL, title }) => {
  return (
    <TouchableOpacity className="relative mx-2">
      <Image
        source={{
          uri: imgURL,
        }}
        className="h-20 w-20 rounded opacity-95"
      />
      <Text className="font-bold absolute bottom-1 left-1 text-white">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Card;
