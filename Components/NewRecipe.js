import { View, ScrollView, Text, Modal, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../styles';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { defaultRecipe } from './DefaultRecipes';
import {Picker} from '@react-native-picker/picker';


function handleSubmit(func, text) {
  func(text);
}

export const NewRecipe = ({ navigation, route }) => {

  const [onLoad, setOnLoad] = useState(false);

  const [methodText, setMethodText] = useState("Diner Drip");
  const [brandText, setBrandText] = useState("Coffee brand");
  const [roastText, setRoastText] = useState("Roast type");
  const [grindText, setGrindText] = useState("Grind settings");
  const [waterTempText, setWaterTempText] = useState("Water temp");
  const [selectedMethod, setSelectedMethod] = useState("default method");

  const [activeEdit, setActiveEdit] = useState(null);
  const [activeEditText, setActiveEditText] = useState("");
  const [editWindowOpen, setEditWindowOpen] = useState(false);




  const [loadedRecipe, setLoadedRecipe] = useState({ method: "", brand: "", roast: "", grind: "", waterTemp: "" })

  const [loadedRecipeArray, setLoadedRecipeArray] = useState([
    {
      method: "default method",
      brand: "default brand",
      roast: "default roast",
      grind: "default grind",
      waterTemp: "default waterTemp",
    },
  ]);


  async function getArray() {
    (await AsyncStorage.getItem("recipeList")) != null
      ? AsyncStorage.getItem("recipeList")
        .then((value) => JSON.parse(value))
        .then((value) => setLoadedRecipeArray(value))
      : AsyncStorage.setItem("recipeList", JSON.stringify(defaultRecipe));
    setLoadedRecipeArray(defaultRecipe);
  }

  useEffect(() => {
    onLoad == false ? loadStartupRecipe() : null;
  });


  function loadStartupRecipe() {
    setOnLoad(true);
    getArray();
  }


  async function saveRecipe() {
    const newRecipe = {
      method: methodText,
      brand: brandText,
      roast: roastText,
      grind: grindText,
      waterTemp: waterTempText
    }

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

  const displayArray = loadedRecipeArray.map((value, index) => (<Text key={index}>Method: {value.method}{"\n"}Brand: {value.brand}{"\n"}Roast: {value.roast}{"\n"}Grind: {value.grind}{"\n"}Water Temp: {value.waterTemp}</Text>));



  return (
    <View>


      <Text style={styles.recipeHeadline}>Method: </Text>
      <Picker
  selectedValue={methodText}
  onValueChange={(itemValue, itemIndex) =>
    setMethodText(itemValue)
  }>
  <Picker.Item label="Pourover" value="Pourover" />
  <Picker.Item label="French Press" value="French Press" />
  <Picker.Item label="Espresso" value="Espresso" />
  <Picker.Item label="AeroPress" value="AeroPress" />
  <Picker.Item label="Drip" value="Drip" />
  <Picker.Item label="Moka Pot" value="Moka Pot" />
  <Picker.Item label="Percolator" value="Percolator" />
  <Picker.Item label="Other" value="Other" />
</Picker>
      


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
        onPress={() => { saveRecipe() }}
        style={styles.buttonRow}><Text style={styles.button}>Save</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
      onPress={()=>{alert("loaded?");loadData()}}
      style={styles.buttonRow}><Text style={styles.button}>Load</Text>
      </TouchableOpacity> */}
      {/* <Text>{"\n"}{displayArray}</Text> */}

      <View>
        {editWindowOpen &&
          <TextInput
            autoFocus={true}
            selectTextOnFocus={true}
            style={styles.input}
            value={activeEditText}
            onChangeText={setActiveEditText}
            onEndEditing={() => { setEditWindowOpen(false); handleSubmit(eval(activeEdit), activeEditText) }}>
          </TextInput>}
      </View>








    </View>
  )
}