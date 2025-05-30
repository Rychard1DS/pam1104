import { useLocalSearchParams } from "expo-router";
import React from "react";
import{ Text, View} from "react-native";

export default function personagem(){

const { id } = useLocalSearchParams();

return (
    <View>
        <Text>{`Você escolheu a personagem: ${id}`}</Text>
    </View>
);


}