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


import { styles } from "./styles";
import {HomeScreen} from './Components/HomeScreen';
import {defaultRecipe} from './Components/DefaultRecipes';
import {testLoadArray} from './Components/DefaultRecipes';

function handleSubmit(func, text){
  func(text);
}


// const RecipeScreen = ({ navigation, route }) => {
//   return <Text>These are {route.params.filter} recipes
//   </Text>;
// };

const RecipeScreen = ({ navigation, route }) => {
  return <ScrollView>
<Text>
  {route.params.filter}</Text>
  <Text>
  {testLoadArray.map((value, index) => (route.params.filter == value.method && <Text key={index}>Method: {value.method}{"\n"}Brand: {value.brand}{"\n"}Roast: {value.roast}{"\n"}Grind: {value.grind}{"\n"}Water Temp: {value.waterTemp}{"\n"}{"\n"}</Text>))}
</Text>
  </ScrollView>
};


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {
  const [onLoad, setOnLoad] = useState(false);
  const [activeEdit, setActiveEdit] = useState(null);
  const [activeEditText, setActiveEditText] = useState("");
  const [editWindowOpen, setEditWindowOpen] = useState(false);


  const [methodText, setMethodText] = useState("Diner Drip");
  const [brandText, setBrandText] = useState("Coffee brand");
  const [roastText, setRoastText] = useState("Roast type");
  const [grindText, setGrindText] = useState("Grind settings");
  const [waterTempText, setWaterTempText] = useState("Water temp");

  const [loadedRecipe, setLoadedRecipe] = useState({method: "", brand: "", roast: "", grind: "", waterTemp: ""})
  const [modalRecipeVisible, setModalRecipeVisible] = useState(false);
  const [loadedRecipeArray, setLoadedRecipeArray] = useState([
    {
      method: "default method",
      brand: "default brand",
      roast: "default roast",
      grind: "default grind",
      waterTemp: "default waterTemp",
    },
  ]);



  async function storeData() {
    let value = {method: methodText,
                  brand: brandText,
                roast: roastText,
              grind: grindText,
            waterTemp: waterTempText}
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('storedRecipe', jsonValue)
    } catch (e) {
      // saving error
    }
  }

  async function loadData() {
    try {
      await AsyncStorage.getItem('storedRecipe')
      .then((value) => JSON.parse(value))
      .then((value) => setLoadedRecipe(value));
    } catch(e) {
      // error reading value
    }
  }

  async function getArray() {
    (await AsyncStorage.getItem("recipeList")) != null
      ? AsyncStorage.getItem("recipeList")
          .then((value) => JSON.parse(value))
          .then((value) => setLoadedRecipeArray(value))
      : AsyncStorage.setItem("recipeList", JSON.stringify(defaultRecipe));
    setLoadedRecipeArray(defaultRecipe);
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

  

  useEffect(() => {
    
    onLoad == false ? loadStartupRecipe() : null;
  });


  function loadStartupRecipe() {
    setOnLoad(true);
    getArray();
  }

  const displayArray = loadedRecipeArray.map((value, index) => (<Text key={index}>Method: {value.method}{"\n"}Brand: {value.brand}{"\n"}Roast: {value.roast}{"\n"}Grind: {value.grind}{"\n"}Water Temp: {value.waterTemp}</Text>));
  // const displayArray = testLoadArray.map((value, index) => (<Text key={index}>Method: {value.method}{"\n"}Brand: {value.brand}{"\n"}Roast: {value.roast}{"\n"}Grind: {value.grind}{"\n"}Water Temp: {value.waterTemp}</Text>));
  

  return (
    <NavigationContainer>
      <Stack.Navigator>
    
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ title: 'Welcome' }}
    />
    <Stack.Screen name="Recipe" component={RecipeScreen} />
  </Stack.Navigator>
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalRecipeVisible}
        onRequestClose={() => {
          setModalRecipeVisible(!modalRecipeVisible);
        }}
      >
        <View style={styles.backgroundView}>
        <View style={styles.modalView}>
      <Text style={styles.recipeHeadline}>Method: </Text>
      <TouchableOpacity
        onPress={() => {
          setEditWindowOpen(!editWindowOpen);
          setActiveEdit("setMethodText");
          setActiveEditText(methodText);
        }}
      >
        <Text style={styles.textLine}>{methodText}</Text>
      </TouchableOpacity>
      
    
      
      

      <Text style={styles.recipeHeadline}>Coffee Brand: </Text>
      <TouchableOpacity
        onPress={() => {
          setEditWindowOpen(!editWindowOpen);
          setActiveEdit("setBrandText");
          setActiveEditText(brandText);
        }}
      >
        <Text style={styles.textLine}>{brandText}</Text>
      </TouchableOpacity>
      
      

      

      <Text style={styles.recipeHeadline}>Roast:</Text>
      <TouchableOpacity
        onPress={() => {
          setEditWindowOpen(!editWindowOpen);
          setActiveEdit("setRoastText");
          setActiveEditText(roastText);
        }}
      >
        <Text style={styles.textLine}>{roastText}</Text>
      </TouchableOpacity>
      
      

      <Text style={styles.recipeHeadline}>Grind:</Text>
      <TouchableOpacity
        onPress={() => {
          setEditWindowOpen(!editWindowOpen);
          setActiveEdit("setGrindText");
          setActiveEditText(grindText);
        }}
      >
        <Text style={styles.textLine}>{grindText}</Text>
      </TouchableOpacity>
      
     

      <Text style={styles.recipeHeadline}>Water Temp:</Text>
      <TouchableOpacity
        onPress={() => {
          setEditWindowOpen(!editWindowOpen);
          setActiveEdit("setWaterTempText");
          setActiveEditText(waterTempText);
        }}
      >
        <Text style={styles.textLine}>{waterTempText}</Text>
      </TouchableOpacity>
      
    
      <TouchableOpacity
      onPress={()=>{alert("saved?");storeData()}}
      style={styles.buttonRow}><Text style={styles.button}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=>{alert("loaded?");loadData()}}
      style={styles.buttonRow}><Text style={styles.button}>Load</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=>setModalRecipeVisible(false)}>
        <Text style={styles.button}>Close Modal</Text>
      </TouchableOpacity>

      <View>
{editWindowOpen && 
        <TextInput
        autoFocus={true}
        selectTextOnFocus={true}
        style={styles.input}
        value={activeEditText}
        onChangeText={setActiveEditText}
        onEndEditing={() => {setEditWindowOpen(false);handleSubmit(eval(activeEdit), activeEditText)}}>
        </TextInput>}
        </View>
      </View>
      </View>
      </Modal>
      
{displayArray}

       
        <Button
        title="activate modal"
        onPress={()=>setModalRecipeVisible(!modalRecipeVisible)}></Button>
    </ScrollView>
    
    

    </NavigationContainer>
    


  );
}
