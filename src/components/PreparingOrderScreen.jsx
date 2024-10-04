import { View, Text, SafeAreaView , Image } from 'react-native'
import React, {useEffect} from 'react'
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from '@react-navigation/native';

const PreparingOrderScreenn = () => {

  const navigation = useNavigation();

  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate("Delivery")
    }, 4000)
  },[])
  
  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../../Images/image_processing20190821-17803-12pij7c.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-80 w-80"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-white text-center font-bold text-lg my-10"
      >
        Waiting For Restaurant To Confirm Your Order!
      </Animatable.Text>
      <Progress.Circle size={60} indeterminate={true} color='white' />
    </SafeAreaView>
  );
}

export default PreparingOrderScreenn