import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StarIcon , MapPinIcon} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({
  id,
  imgURL,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {

    const navigation = useNavigation();
  return (
    <TouchableOpacity
    onPress={()=>{
      navigation.navigate("Restaurant", {
        id,
        imgURL,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,
      });
    }}
    className="bg-white pb-2 pt-2 mx-1 shadow-lg px-2 rounded-lg"
    >
      <Image
        source={{
          uri: imgURL,
        }}
        className="h-36 w-60 rounded-sm"
      ></Image>
      <View className="px-3">
        <Text className="font-bold pt-1 text-lg">{title}</Text>
        <View className="flex-row space-x-1 items-center">
          <StarIcon size={20} color="green" opacity={0.5} />
          <Text className="text-gray-500">
            <Text className="font-bold text-md text-green-400">{rating}</Text>{" "}
            {""}• {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1 pt-1">
          <MapPinIcon size={20} color="gray" opacity={0.7} />
          <Text className="text-md text-gray-500">Near By {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
