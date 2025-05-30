import React from "react";
import { useRouter } from "expo-router";
import {Button,Text, View } from "react-native";

export default function HomeScreen(){
    const router = useRouter();
    const id = 1;
    return (
        <View>
            <Text>Lista de personagens</Text>
            <Button
                title={`personagem - ${id}`}
                onPress={() => router.push(`/personagens/${id}`)}
            />
        </View>
    );
}