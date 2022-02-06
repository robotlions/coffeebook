import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';


import {
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";

import { styles } from "./styles";


function handleSubmit(func, text){
  func(text);
}




export default function App() {
  const [activeEdit, setActiveEdit] = useState(null);
  const [activeEditText, setActiveEditText] = useState("");
  const [editWindowOpen, setEditWindowOpen] = useState(false);


  const [styleText, setStyleText] = useState("Diner Drip");
  const [brandText, setBrandText] = useState("Coffee brand");
  const [roastText, setRoastText] = useState("Roast type");
  const [grindText, setGrindText] = useState("Grind settings");
  const [waterTempText, setWaterTempText] = useState("Water temp");

  const [loadedRecipe, setLoadedRecipe] = useState({style: "", brand: "", roast: "", grind: "", waterTemp: ""})
  

  async function storeData() {
    let value = {style: styleText,
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


  
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      
      
      <Text>Style: </Text>
      <TouchableOpacity
        onPress={() => {
          setEditWindowOpen(!editWindowOpen);
          setActiveEdit("setStyleText");
          setActiveEditText(styleText);
        }}
      >
        <Text>{styleText}</Text>
      </TouchableOpacity>
      
      <Text>{"\n"}</Text>
      
      

      <Text>Coffee Brand: </Text>
      <TouchableOpacity
        onPress={() => {
          setEditWindowOpen(!editWindowOpen);
          setActiveEdit("setBrandText");
          setActiveEditText(brandText);
        }}
      >
        <Text>{brandText}</Text>
      </TouchableOpacity>
      
      <Text>{"\n"}</Text>

      

      <Text>Roast:</Text>
      <TouchableOpacity
        onPress={() => {
          setEditWindowOpen(!editWindowOpen);
          setActiveEdit("setRoastText");
          setActiveEditText(roastText);
        }}
      >
        <Text>{roastText}</Text>
      </TouchableOpacity>
      
      <Text>{"\n"}</Text>

      <Text>Grind:</Text>
      <TouchableOpacity
        onPress={() => {
          setEditWindowOpen(!editWindowOpen);
          setActiveEdit("setGrindText");
          setActiveEditText(grindText);
        }}
      >
        <Text>{grindText}</Text>
      </TouchableOpacity>
      
      <Text>{"\n"}</Text>

      <Text>Water Temp:</Text>
      <TouchableOpacity
        onPress={() => {
          setEditWindowOpen(!editWindowOpen);
          setActiveEdit("setWaterTempText");
          setActiveEditText(waterTempText);
        }}
      >
        <Text>{waterTempText}</Text>
      </TouchableOpacity>
      <KeyboardAvoidingView>
{editWindowOpen && 
        <TextInput
        autoFocus={true}
        selectTextOnFocus={true}
        style={styles.input}
        value={activeEditText}
        onChangeText={setActiveEditText}
        onEndEditing={() => {setEditWindowOpen(false);handleSubmit(eval(activeEdit), activeEditText)}}>
        </TextInput>}
        </KeyboardAvoidingView>
    
      <TouchableOpacity
      onPress={()=>{alert("saved?");storeData()}}
      style={styles.buttonRow}><Text style={styles.button}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=>{alert("loaded?");loadData()}}
      style={styles.buttonRow}><Text style={styles.button}>Load</Text>
      </TouchableOpacity>
      
      <Text>{"\n"}</Text>


        <Text>Style: {loadedRecipe.style} / Brand: {loadedRecipe.brand} / Roast: {loadedRecipe.roast}
        Grind: {loadedRecipe.grind} / Water Temp: {loadedRecipe.waterTemp}</Text>
      
    </ScrollView>


  );
}
