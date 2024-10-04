import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import Categories from "./components/categories";
import FeatureRow from "./components/FeatureRow";

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white pt-4">
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-5 mt-6 rounded-full"
        />
        <View className="flex-1">
          <Text className="mt-5 font-bold text-gray-500 text-xs ">
            Deliver Now
          </Text>
          <View className="flex flex-row items-center space-x-1">
            <Text className="font-bold text-xl">
              Current Location
            </Text>
              <ChevronDownIcon size={22} color="#00CCBB"></ChevronDownIcon>
          </View>
        </View>
        <View className="mt-6">
          <UserIcon size={35} color="#00CCBB"></UserIcon>
        </View>
      </View>
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-2 items-center">
          <MagnifyingGlassIcon size={20} color="gray" />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          ></TextInput>
        </View>
        <AdjustmentsVerticalIcon size={24} color="#00CCBB" />
      </View>
      <ScrollView className="bg-gray-200 h-screen mt-1">
        <Categories />

        <FeatureRow
          id="123"
          title="Featured"
          description="Paid Placement form our partners."
        />
        <FeatureRow
          id="1234"
          title="Tasty Discounts"
          description="Everyone's been enjoying this juicy discounts.!"
        />
        <FeatureRow
          id="12345"
          title="Offer Near You"
          description="Why not support your local restaurant tonight"
        />
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
