import {
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  KeyboardAvoidingView,
  Button,
  Modal,
  StyleSheet,
} from "react-native";

import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RecipeScreen } from "./Components/RecipeScreen";


import { styles } from "./styles";
import {HomeScreen} from './Components/HomeScreen';
import { NewRecipe } from "./Components/NewRecipe";
import {defaultRecipe} from './Components/DefaultRecipes';
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";

function handleSubmit(func, text){
  func(text);
}





const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {
  const [onLoad, setOnLoad] = useState(false);
  
  

  



  

  async function loadData() {
    try {
      await AsyncStorage.getItem('storedRecipe')
      .then((value) => JSON.parse(value))
      .then((value) => setLoadedRecipe(value));
    } catch(e) {
      // error reading value
    }
  }

  

  async function saveRecipe() {
    const newRecipe = {
      recipeName: recipeName,
      ratio: ratio,
      grindSize: grindSize,
      agitation: agitation,
      temperature: temperature,
      brewStyle: brewStyle,
    };
    let loadedRecipe;
    (await AsyncStorage.getItem("recipeList")) == null
      ? AsyncStorage.setItem("recipeList", JSON.stringify(newRecipe))
      : AsyncStorage.getItem("recipeList")
          .then((value) => JSON.parse(value))
          .then((value) => (loadedRecipe = value))
          .then(() => loadedRecipe.push(newRecipe))
          .then(() =>
            AsyncStorage.setItem("recipeList", JSON.stringify(loadedRecipe))
          )
          .then(() => getArray());
    
    alert("Recipe Added!");
    
  }

  

  

  return (
    <NavigationContainer>
       <StatusBar style="auto" />
      <Stack.Navigator>
    
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ title: 'Welcome' }}
    />
    <Stack.Screen name="Recipe" component={RecipeScreen} />
    <Stack.Screen name="New Recipe" component={NewRecipe}/>
  </Stack.Navigator>
    

    </NavigationContainer>
    


  );
}
