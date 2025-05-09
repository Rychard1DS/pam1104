import React from "react";
import { useRouter } from "expo-router";
import {Button, Text, View } from "react-native";

export default function HomeScreen(){
    const router = useRouter();
    return (
        <View>
            <Text>Teste</Text>
            <Button
            title="Personagens"
            onPress={()=> router.push('/characters')}
            <View/>
    )
}