import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from "react-redux";
import { selectBasketItems } from "../../features/BasketSlice";
import { useNavigation } from "@react-navigation/native";
import { totalPrice } from "../../features/BasketSlice";

const TotalBasketIcon = () => {


    const items = useSelector(selectBasketItems);
    const navigation = useNavigation();
    const basketTotal = useSelector(totalPrice);

    if (items.length === 0) return null;

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity onPress={()=>navigation.navigate("Basket")} className="mx-5 bg-[#00CCBB] rounded-lg p-4 flex-row space-x-1 items-center">
        <Text className="text-white font-extrabold bg-[#01A296] text-lg py-1 px-2">
          {items.length}
        </Text>
        <Text className="flex-1 text-lg text-white font-extrabold text-center">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          ₹{basketTotal ? basketTotal.toString() : "00.0"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default TotalBasketIcon