import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RecipeScreen } from "./Components/RecipeScreen";
import { styles } from "./styles";
import {HomeScreen} from './Components/HomeScreen';
import { NewRecipe } from "./Components/NewRecipe";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {
  const [onLoad, setOnLoad] = useState(false);
  
  return (
    <NavigationContainer>
       <StatusBar style="auto" />
      <Stack.Navigator>
    
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ title: 'Coffeebook Home' }}
    />
    <Stack.Screen name="Recipes" component={RecipeScreen} />
    <Stack.Screen name="New Recipe" component={NewRecipe}/>
  </Stack.Navigator>
    

    </NavigationContainer>
    
  );
}
