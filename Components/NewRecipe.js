import { View, ScrollView, Text, Modal, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../styles';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { defaultRecipe } from './DefaultRecipes';
import { Picker } from '@react-native-picker/picker';


function handleSubmit(func, text) {
  func(text);
}

export const NewRecipe = ({ navigation, route }) => {

  const [onLoad, setOnLoad] = useState(false);

  const [recipeNameText, setRecipeNameText] = useState("New Recipe");
  const [methodText, setMethodText] = useState("");
  const [brandText, setBrandText] = useState("");
  const [roastText, setRoastText] = useState("");
  const [grindText, setGrindText] = useState("");
  const [waterTempText, setWaterTempText] = useState("");
  const [agitationText, setAgitationText] = useState("");
  const [waterTypeText, setWaterTypeText] = useState("");
  const [notesText, setNotesText] = useState("Edit to add description");
  const [addedWaterAmountText, setAddedWaterAmountText] = useState("");
  const [milkTypeText, setMilkTypeText] = useState("");
  const [milkConsistencyText, setMilkConsistencyText] = useState("");
  const [sweetenerTypeText, setSweetenerTypeText] = useState("");
  const [sweetenerAmountText, setSweetenerAmountText] = useState("")


  const [activeEdit, setActiveEdit] = useState(null);
  const [activeEditText, setActiveEditText] = useState("");
  const [editWindowOpen, setEditWindowOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);


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
      recipeName: recipeNameText,
      method: methodText,
      brand: brandText,
      roast: roastText,
      grind: grindText,
      waterTemp: waterTempText,
      agitation: agitationText,
      waterType: waterTypeText,
      addedWaterAmount: addedWaterAmountText,
      milkType: milkTypeText,
      milkConsistency: milkConsistencyText,
      sweetenerType: sweetenerTypeText,
      sweetenerAmount: sweetenerAmountText,
      notes: notesText,
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



  return (<View style={styles.recipeContainer}>

    <ScrollView>


      


      <Text style={styles.recipeHeadline}>Method</Text>
      <Picker
        selectedValue={methodText}
        onValueChange={(itemValue, itemIndex) =>
          setMethodText(itemValue)
        }>
        <Picker.Item color="gray" enabled={false} label="Select Brewing Method" value="" />
        <Picker.Item label="Pourover" value="Pourover" />
        <Picker.Item label="French Press" value="French Press" />
        <Picker.Item label="Espresso" value="Espresso" />
        <Picker.Item label="AeroPress" value="AeroPress" />
        <Picker.Item label="Drip" value="Drip" />
        <Picker.Item label="Moka Pot" value="Moka Pot" />
        <Picker.Item label="Percolator" value="Percolator" />
        <Picker.Item label="Other" value="Other" />
      </Picker>

      <TouchableOpacity
        onPress={() => {
          setModalVisible(!modalVisible);
          setEditWindowOpen(!editWindowOpen);
          setActiveEdit("setRecipeNameText");
          setActiveEditText(recipeNameText);
        }}
      >
        <Text style={styles.recipeHeadline}>Recipe Name</Text>
        <Text style={styles.textLine}>{recipeNameText}</Text>
      </TouchableOpacity>


      <TouchableOpacity
        onPress={() => {
          setModalVisible(!modalVisible);
          setEditWindowOpen(!editWindowOpen);
          setActiveEdit("setBrandText");
          setActiveEditText(brandText);
        }}
      >
        <Text style={styles.recipeHeadline}>Coffee Brand</Text>
        <Text style={styles.textLine}>{brandText}</Text>
      </TouchableOpacity>



      <TouchableOpacity
        onPress={() => {
          setModalVisible(!modalVisible);
          setEditWindowOpen(!editWindowOpen);
          setActiveEdit("setRoastText");
          setActiveEditText(roastText);
        }}
      >
        <Text style={styles.recipeHeadline}>Roast</Text>
        <Text style={styles.textLine}>{roastText}</Text>
      </TouchableOpacity>



      <TouchableOpacity
        onPress={() => {
          setModalVisible(!modalVisible);
          setEditWindowOpen(!editWindowOpen);
          setActiveEdit("setGrindText");
          setActiveEditText(grindText);
        }}
      >
        <Text style={styles.recipeHeadline}>Grind</Text>
        <Text style={styles.textLine}>{grindText}</Text>
      </TouchableOpacity>



      <TouchableOpacity
        onPress={() => {
          setModalVisible(!modalVisible);
          setEditWindowOpen(!editWindowOpen);
          setActiveEdit("setWaterTempText");
          setActiveEditText(waterTempText);
        }}
      >
        <Text style={styles.recipeHeadline}>Water Temp</Text>
        <Text style={styles.textLine}>{waterTempText}</Text>
      </TouchableOpacity>



      <TouchableOpacity
        onPress={() => {
          setModalVisible(!modalVisible);
          setEditWindowOpen(!editWindowOpen);
          setActiveEdit("setAgitationText");
          setActiveEditText(agitationText);
        }}
      >
        <Text style={styles.recipeHeadline}>Agitation</Text>
        <Text style={styles.textLine}>{agitationText}</Text>
      </TouchableOpacity>


      <TouchableOpacity
        onPress={() => {
          setModalVisible(!modalVisible);
          setEditWindowOpen(!editWindowOpen);
          setActiveEdit("setWaterTypeText");
          setActiveEditText(waterTypeText);
        }}
      >
        <Text style={styles.recipeHeadline}>Water Type</Text>
        <Text style={styles.textLine}>{waterTypeText}</Text>
      </TouchableOpacity>


      <TouchableOpacity
        onPress={() => {
          setModalVisible(!modalVisible);
          setEditWindowOpen(!editWindowOpen);
          setActiveEdit("setAddedWaterAmountText");
          setActiveEditText(addedWaterAmountText);
        }}
      >
        <Text style={styles.recipeHeadline}>Added Water</Text>
        <Text style={styles.textLine}>{addedWaterAmountText}</Text>
      </TouchableOpacity>


      <TouchableOpacity
        onPress={() => {
          setModalVisible(!modalVisible);
          setEditWindowOpen(!editWindowOpen);
          setActiveEdit("setMilkTypeText");
          setActiveEditText(milkTypeText);
        }}
      >
        <Text style={styles.recipeHeadline}>Milk Type</Text>
        <Text style={styles.textLine}>{milkTypeText}</Text>
      </TouchableOpacity>


      <TouchableOpacity
        onPress={() => {
          setModalVisible(!modalVisible);
          setEditWindowOpen(!editWindowOpen);
          setActiveEdit("setMilkConsistencyText");
          setActiveEditText(milkConsistencyText);
        }}
      >
        <Text style={styles.recipeHeadline}>Milk Consistency</Text>
        <Text style={styles.textLine}>{milkConsistencyText}</Text>
      </TouchableOpacity>


      <TouchableOpacity
        onPress={() => {
          setModalVisible(!modalVisible);
          setEditWindowOpen(!editWindowOpen);
          setActiveEdit("setSweetenerTypeText");
          setActiveEditText(sweetenerTypeText);
        }}
      >
        <Text style={styles.recipeHeadline}>Sweetener Type</Text>
        <Text style={styles.textLine}>{sweetenerTypeText}</Text>
      </TouchableOpacity>


      <TouchableOpacity
        onPress={() => {
          setModalVisible(!modalVisible);
          setEditWindowOpen(!editWindowOpen);
          setActiveEdit("setSweetenerAmountText");
          setActiveEditText(sweetenerAmountText);
        }}
      >
        <Text style={styles.recipeHeadline}>Sweetener Amount</Text>
        <Text style={styles.textLine}>{sweetenerAmountText}</Text>
      </TouchableOpacity>



      <TouchableOpacity
        onPress={() => {
          setModalVisible(!modalVisible);
          setEditWindowOpen(!editWindowOpen);
          setActiveEdit("setNotesText");
          setActiveEditText(notesText);
        }}
      >
        <Text style={styles.recipeHeadline}>Notes</Text>
        <Text style={styles.textLine}>{notesText}</Text>
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
</ScrollView>

      {/* {editWindowOpen && */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalRecipeVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <TextInput
            autoFocus={true}
            selectTextOnFocus={true}
            style={styles.input}
            value={activeEditText}
            onChangeText={setActiveEditText}
            onEndEditing={() => { setModalVisible(false); handleSubmit(eval(activeEdit), activeEditText) }}>
          </TextInput>
        </View>
      </Modal>









    </View>
  )
}