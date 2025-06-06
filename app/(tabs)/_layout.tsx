import {Ionicons} from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { Tabs } from "expo-router";

export default function TabLayout(){
    return(
<Tabs>
        <Tabs.Screen
        name="index"
        options={{
            title: 'Home',
            tabBarIcon: ({color}) => <Ionicons name="home-outline" color={color}/>
        }}        
        />
<Tabs.Screen
        name="explore"
        options={{
            title:'Explore',
            tabBarIcon: ({color}) => <Ionicons name="home-outline" color={color}/>
        }}
        />    
          
          <Tabs.Screen
        name="list"
        options={{
            title:'List',
            tabBarIcon: ({color}) => <Ionicons name="settings-outline" color={color}/>
        }}/>
            </Tabs>
    
// Tipos para categorias do IMC
type, IMCCategory = 'Abaixo do peso' | 'Peso normal' | 'Sobrepeso' | 'Obesidade';

const CalculadoraIMC: React.FC = () => {
  const [peso, setPeso] = useState<number>(70);
  const [altura, setAltura] = useState<number>(1.75);
  const [imc, setImc] = useState<number | null>(null);
  const [categoria, setCategoria] = useState<IMCCategory | null>(null);

  // 1. Calcular IMC quando peso ou altura mudarem
  useEffect(() => {
    if (peso > 0 && altura > 0) {
      const imcCalculado = peso / (altura * altura);
      setImc(parseFloat(imcCalculado.toFixed(2)));
    }
  }, [peso, altura]);

  // 2. Determinar categoria do IMC quando ele for atualizado
  useEffect(() => {
    if (imc === null) return;

    if (imc < 18.5) {
      setCategoria('Abaixo do peso');
    } else if (imc >= 18.5 && imc < 24.9) {
      setCategoria('Peso normal');
    } else if (imc >= 25 && imc < 29.9) {
      setCategoria('Sobrepeso');
    } else {
      setCategoria('Obesidade');
    }
  }, [imc]);

  // 3. Atualizar título da página quando o IMC mudar
  useEffect(() => {
    if (imc !== null) {
      document.title = `IMC: ${imc}`;
    } else {
      document.title = 'Calculadora de IMC';
    }
  }, [imc]);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h2>Calculadora de IMC</h2>

      <div>
        <label>
          Peso (kg):
          <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(parseFloat(e.target.value))}
            step="0.1"
            min="0"
          />
        </label>
      </div>

      <div>
        <label>
          Altura (m):
          <input
            type="number"
            value={altura}
            onChange={(e) => setAltura(parseFloat(e.target.value))}
            step="0.01"
            min="0"
          />
        </label>
      </div>

      <hr />

      {imc !== null && (
        <>
          <h3>Seu IMC: {imc}</h3>
          <p>Categoria: <strong>{categoria}</strong></p>
        </>
      )}
    </div>
  );
};

export default CalculadoraIMC;

;
}