import {View, ScrollView, Text, Modal, TouchableOpacity, Alert} from 'react-native';
import {useState, useEffect} from 'react';
import {styles} from '../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {defaultRecipe} from './DefaultRecipes';



export const RecipeScreen = ({ navigation, route}) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [loadedArray, setLoadedArray] = useState({method: "default method"});
    const [onLoad, setOnLoad] = useState(false);
    
  const [loadedRecipeArray, setLoadedRecipeArray] = useState([{method: "", brand: "", roast: "", grind: "", waterTemp: ""}])


    function activateModal(value){
        setModalVisible(true);
        setLoadedArray({method:value.method,brand:value.brand,roast:value.roast,grind:value.grind,waterTemp:value.waterTemp,agitation:value.agitation,waterType:value.waterType,notes:value.notes})
    }

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

    function deleteAlert(index){ 
      Alert.alert(
        "Delete-O-Matic",
        `Are you sure?`,
        [
          {
            text: "Delete Recipe",
            onPress: () => alertDeleteRecipe(index),
            style: "cancel",
          },
          {
            text: "Cancel",
            style: "cancel",
          },
        ],
        {
          cancelable: true,
        }
      );
  }

  function alertDeleteRecipe(index) {
    let data = loadedRecipeArray;
    data.splice(index, 1);
    setTimeout(async () => {
      await AsyncStorage.setItem("recipeList", JSON.stringify(data)),getArray();
    }, 300);
    
  }


    return <ScrollView contentContainerStyle={styles.recipeContainer}>
  <Text style={styles.recipeHeading}>
    {route.params.filter}{"\n"}</Text>
    
    {loadedRecipeArray.map((value, index) => (route.params.filter == value.method && <TouchableOpacity key={index} style={styles.touchableRecipe} onLongPress={()=>deleteAlert(index)} onPress={()=>activateModal(value)}>
      <Text style={styles.recipeHeadline}>
      {value.recipeName}</Text>
      <Text>
      {value.method}{"\n"}
      <Text style={{fontStyle: "italic"}}>
      {value.notes}
      </Text>
      </Text></TouchableOpacity>))}
  



      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalRecipeVisible(!modalVisible);
        }}
      >
        <View style={styles.backgroundView}>
        <View style={styles.modalView}>
            <Text>Name: {loadedArray.recipeName}</Text>
            <Text>Method: {loadedArray.method}</Text>
            <Text>Brand: {loadedArray.brand}</Text>
            <Text>Roast: {loadedArray.roast}</Text>
            <Text>Grind: {loadedArray.grind}</Text>
            <Text>Water Temp: {loadedArray.waterTemp}</Text>
            <Text>Agitaiton: {loadedArray.agitation}</Text>
            <Text>Water Type: {loadedArray.waterType}</Text>
            <Text>Added Water: {loadedArray.addedWaterAmount}</Text>
            <Text>Milk Type: {loadedArray.milkType}</Text>
            <Text>Milk Consistency: {loadedArray.milkConsistency}</Text>
            <Text>Sweetener Type: {loadedArray.sweetenerType}</Text>
            <Text>Sweetner Amount: {loadedArray.sweetenerAmount}</Text>
            <Text>Notes: {loadedArray.notes}{"\n"}</Text>
            <TouchableOpacity onPress={()=>setModalVisible(false)}><Text>Close Modal</Text></TouchableOpacity>
            </View></View></Modal>
    </ScrollView>


    


  };