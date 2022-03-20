import {Text, View, ScrollView, TouchableOpacity, Modal, TextInput} from 'react-native';
import {useState} from 'react';
import {styles} from '../styles';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { defaultRecipe } from './DefaultRecipes';

function handleSubmit(func, text) {
    func(text);
  }

export const EditRecipe = ({ navigation, route }) => {


  const [recipeNameText, setRecipeNameText] = useState(route.params.array.recipeName);
  const [methodText, setMethodText] = useState(route.params.array.method);
  const [brandText, setBrandText] = useState(route.params.array.brand);
  const [roastText, setRoastText] = useState(route.params.array.roast);
  const [grindText, setGrindText] = useState(route.params.array.grind);
  const [waterTempText, setWaterTempText] = useState(route.params.array.waterTemp);
  const [agitationText, setAgitationText] = useState(route.params.array.agitation);
  const [waterTypeText, setWaterTypeText] = useState(route.params.array.waterType);
  const [notesText, setNotesText] = useState(route.params.array.notes);
  const [addedWaterAmountText, setAddedWaterAmountText] = useState(route.params.array.addedWaterAmount);
  const [milkTypeText, setMilkTypeText] = useState(route.params.array.milkType);
  const [milkConsistencyText, setMilkConsistencyText] = useState(route.params.array.milkConsistency);
  const [sweetenerTypeText, setSweetenerTypeText] = useState(route.params.array.sweetenerType);
  const [sweetenerAmountText, setSweetenerAmountText] = useState(route.params.array.sweetenerAmount);

  const [loadedRecipeArray, setLoadedRecipeArray] = useState(null);

  const [activeEdit, setActiveEdit] = useState(null);
  const [activeEditText, setActiveEditText] = useState("");
  const [editWindowOpen, setEditWindowOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

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
        .then(() => loadedRecipe.splice(route.params.array.index, 1, newRecipe))
        .then(() =>
          AsyncStorage.setItem("recipeList", JSON.stringify(loadedRecipe))
        )
        .then(() => getArray());

    alert("Recipe Added!");

  }

    return(

<View>
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
</ScrollView>

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