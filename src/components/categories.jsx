import { View, Text, ScrollView } from "react-native";
import React from "react";
import Card from "./Card";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 8,
        padiingTop: 10,
      }}
      showsHorizontalScrollIndicator={false}
    >
      <Card
        imgURL="https://cdn.grabon.in/gograbon/images/category/1546252575451.png"
        title="Offer"
      />
      <Card
        imgURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-13XzBSV8JqKA4_8LgPWxcTKgNOPo_HWaNiKFBBPrwQ&s"
        title="Chinese"
      />
      <Card
        imgURL="https://luluwild.co.uk/wp-content/uploads/2023/07/pan-asian-vs-chinese-cousine-1024x771.jpeg"
        title="Asian"
      />
      <Card
        imgURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStmT8auYN50JMTmXZTfpDoHq8eAFTsa_i61E3tto0k3Ze8-WY2VybAf1irlZ_8bc6XrwY&usqp=CAU"
        title="Thai"
      />
      <Card
        imgURL="https://www.southernliving.com/thmb/3x3cJaiOvQ8-3YxtMQX0vvh1hQw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2652401_QFSSL_SupremePizza_00072-d910a935ba7d448e8c7545a963ed7101.jpg"
        title="Pizza"
      />

      <Card
        imgURL="https://eatdrinkandbekerry.net/wp-content/uploads/2022/09/2-Yorkshire-Tea-Breakfast-2-735x551.jpg"
        title="Breakfast"
      />
    </ScrollView>
  );
};

export default Categories;
