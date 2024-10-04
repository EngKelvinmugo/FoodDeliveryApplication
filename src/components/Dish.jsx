import { View, Text, TouchableOpacity  , Image } from 'react-native'
import React, { useState } from 'react';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';
import { useDispatch, useSelector } from 'react-redux';
import { selectBasketItems , selectBasketItemsWithId , addToBasket, removeFromBasket } from '../../features/BasketSlice';

const Dish = ({ id , name , description , price  , image}) => {

    const [isPressed , setIsPressed] = useState(false);
    const dispatch = useDispatch();
    const items = useSelector((state)=>selectBasketItemsWithId( state , id ));

    const addToBag = ()=>{
      dispatch(addToBasket({ id, name, description, price, image }));
    }
    const removeFromBag = ()=>{
      dispatch(removeFromBasket(id));
    }

  return (
    <>
      <TouchableOpacity onPress={() => setIsPressed(!isPressed)}>
        <View
          className={`p-4 py-2 border border-gray-300 flex-row mb-2 bg-white items-center ${
            isPressed && "border-b-0 mb-0"
          }`}
        >
          <View className="flex-1">
            <Text className="text-lg font-bold mb-1">{name}</Text>
            <Text className="text-sm text-gray-400">{description}</Text>
            <Text className="text-gray-500 pt-1">₹{price}</Text>
          </View>

          <View>
            <Image
              source={{
                uri: image,
              }}
              className="h-20 w-20 rounded-lg"
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4 items-center">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity disabled={!items.length} onPress={removeFromBag}>
              <MinusCircleIcon
                size={40}
                color={items.length > 0 ? "#00CCBB" : "gray"}
              />
            </TouchableOpacity>
            <Text className="text-3xl">{items.length}</Text>
            <TouchableOpacity onPress={addToBag}>
              <PlusCircleIcon size={40} color="#00CCBB" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
}

export default Dish