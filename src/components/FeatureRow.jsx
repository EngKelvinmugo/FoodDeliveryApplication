import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeatureRow = ({ title, description, id , image }) => {
  
  return (
    <View>
      <View className="mt-4 flex-row justify-between px-4 ">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon size={24} color="#00CCBB" />
      </View>
      <Text className="text-xm text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 8,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-1"
      >
        <RestaurantCard
          id="123"
          imgURL="https://i.redd.it/g6631zbzg0pa1.jpg"
          title="Polo"
          rating="4.5 Excellent"
          genre="Asian"
          address="Indian Coorporation"
          short_description="Asian cuisine encompasses a diverse range of flavors and dishes, known for its use of fresh ingredients, aromatic spices, and balance of flavors."
          dishes={[]}
          long={26.8886623}
          lat={81.0552004}
        />
        <RestaurantCard
          id="123"
          imgURL="https://www.mediainfoline.com/wp-content/uploads/2023/07/KFC-Bucket-price.jpg"
          title="KFC"
          rating="4.8 Excellent"
          genre="Offer"
          address="123 Block 4 Antartica"
          short_description="KFC: World-renowned for its secret recipe fried chicken, offering a variety of menu options globally."
          dishes={[]}
          long={26.8886623}
          lat={81.0552004}
        />
        <RestaurantCard
          id="123"
          imgURL="https://batterseapowerstation.co.uk/content/uploads/2023/08/Nandos-Battersea-Hero-1600x1067@2x-1600x1067.jpg"
          title="Nando"
          rating="4.0 Good"
          genre="Thai"
          address="123 B Block Palaw"
          short_description="Thai food is a vibrant cuisine renowned for its bold flavors, aromatic herbs, and balance of sweet, sour, salty, and spicy tastes."
          dishes={[]}
          long={26.8886623}
          lat={81.0552004}
        />
      </ScrollView>
    </View>
  );
};

export default FeatureRow;
