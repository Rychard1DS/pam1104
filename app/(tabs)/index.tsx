
import CustomButton from "@/components/CustomButton";
import Example from "@/components/example";
import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function HomeScreen() {
    const [count, setCount] = useState(0);
    const [nome, setNome] = useState("Rczin");

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Bem-Vindo ao meu App,</Text>
            <Text>Contador: {count}</Text>
            <Button title="Aumentar" onPress={() => { setCount(count + 100) }} />
            <Button title="Diminuir" onPress={() => { setCount(count - 50) }} />
            <Button title="Resetar" onPress={() => { setCount(count - count) }} />

            <TextInput placeholder="Defina um número"
                onChangeText={setNome} />

            <CustomButton title="DESISTO!!!"
                onPress={() => { setNome("Rczin" + count) }} 
            />

            <Example example="Texto de exemplo" />
        </View>
    );
}
