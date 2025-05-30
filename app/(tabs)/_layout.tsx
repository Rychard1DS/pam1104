import {Ionicons} from "@expo/vector-icons";
import React from "react";
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


    );
}