import { View, Text, ScrollView , Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useRoute } from "@react-navigation/native";
import { ArrowLeftIcon, ChevronRightIcon, MapPinIcon, QuestionMarkCircleIcon, StarIcon } from 'react-native-heroicons/outline';
import { useNavigation } from "@react-navigation/native";
import Dish from './Dish';
import TotalBasketIcon from './TotalBasketIcon';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../../features/RestaurantSlice';


const CardScreen = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();


    const {
      params: {
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
      },
    } = useRoute();

    useEffect(()=>{
      dispatch(
        setRestaurant({
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
        })
      );
    } , [dispatch])

  return (
    <>
      <TotalBasketIcon />
      <ScrollView>
        <View className="relative">
          <Image
            source={{
              uri: imgURL,
            }}
            className="h-56 w-full bg-gray-100"
          />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute left-5 top-16 p-2 bg-gray-200 rounded-full"
          >
            <ArrowLeftIcon size={25} color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View>
              <View className="felx-row space-x-2 my-2">
                <View className="flex-row items-center space-x-2">
                  <StarIcon size={22} color="green" opacity={0.5} />
                  <Text className="text-gray-500">
                    <Text className="font-bold text-md text-green-400">
                      {rating}
                    </Text>{" "}
                    {""}• {genre}
                  </Text>
                  <MapPinIcon size={22} color="green" opacity={0.5} />
                  <Text className="text-gray-500">{address}</Text>
                </View>
              </View>
            </View>
            <Text className="text-gray-500 pb-4">{short_description}</Text>
          </View>
          <TouchableOpacity className="flex-row items-center">
            <View className="flex-row p-4 space-x-2 border-y border-gray-300">
              <QuestionMarkCircleIcon size={22} color="gray" />
              <Text className="font-bold text-md flex-1 pl-1">
                Have a food ellergy?
              </Text>
              <ChevronRightIcon size={22} color="green" />
            </View>
          </TouchableOpacity>
        </View>
        <View className="p-4">
          <Text className="font-bold text-xl">Menu</Text>
        </View>
        <ScrollView className="pb-32">
          <Dish
            name="Chicken Bucket"
            description="Dal is a staple dish in Indian cuisine, consisting of cooked lentils or split pulses."
            image="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xs/D-PR00002169.jpg?ver=41.02"
            price={700}
            id={1}
          />
          <Dish
            name="Roasted Chicken"
            description="Dal is a staple dish in Indian cuisine, consisting of cooked lentils or split pulses."
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeMSX6Up86bmFOmFL5e51cprseli9JfgTZgFCdRh9ymg&s"
            price={800}
            id={2}
          />
          <Dish
            name="Chicken Burger"
            description="Dal is a staple dish in Indian cuisine, consisting of cooked lentils or split pulses."
            image="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xs/D-PR00000730.jpg?ver=41.64"
            price={220}
            id={3}
          />
          <Dish
            name="Rice"
            description="Dal is a staple dish in Indian cuisine, consisting of cooked lentils or split pulses."
            image="https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Fried-Rice-min.jpg"
            price={150}
            id={4}
          />
          <Dish
            name="Daal"
            description="Dal is a staple dish in Indian cuisine, consisting of cooked lentils or split pulses."
            image="https://www.cubesnjuliennes.com/wp-content/uploads/2023/10/Yellow-Dal-Recipe-500x500.jpg"
            price={180}
            id={5}
          />
          <Dish
            name="Saahi Paneer"
            description="Dal is a staple dish in Indian cuisine, consisting of cooked lentils or split pulses."
            image="https://myfoodstory.com/wp-content/uploads/2022/04/Shahi-Paneer-2.jpg"
            price={499}
            id={6}
          />
        </ScrollView>
      </ScrollView>
    </>
  );
}

export default CardScreen