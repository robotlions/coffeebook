import {View, ScrollView, Text, Modal, TouchableOpacity, Alert} from 'react-native';
import { testLoadArray } from './DefaultRecipes';
import {useState, useEffect} from 'react';
import {styles} from '../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {defaultRecipe} from './DefaultRecipes';



export const RecipeScreen = ({ navigation, route}) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [loadedArray, setLoadedArray] = useState({method: "default method"});
    const [onLoad, setOnLoad] = useState(false);
    
  const [loadedRecipeArray, setLoadedRecipeArray] = useState([{method: "", brand: "", roast: "", grind: "", waterTemp: ""}])

  const [loadedIndex, setLoadedIndex] = useState(null);

    function activateModal(value){
        setModalVisible(true);
        setLoadedArray({method:value.method,brand:value.brand,roast:value.roast,grind:value.grind,waterTemp:value.waterTemp})
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
    // let index = loadedIndex;
    let data = loadedRecipeArray;
    data.splice(index, 1);
    setTimeout(async () => {
      await AsyncStorage.setItem("recipeList", JSON.stringify(data)),getArray();
    }, 300);
    
  }


    return <View><ScrollView>
  <Text>
    {route.params.filter}{"\n"}</Text>
    <Text>
    {loadedRecipeArray.map((value, index) => (route.params.filter == value.method && <TouchableOpacity style={styles.touchableRecipe} key={index} onLongPress={()=>deleteAlert(index)} onPress={()=>activateModal(value)}><Text>Method: {value.method}{"\n"}Brand: {value.brand}{"\n"}Roast: {value.roast}{"\n"}Grind: {value.grind}{"\n"}Water Temp: {value.waterTemp}{"\n"}{"\n"}</Text></TouchableOpacity>))}
  </Text>
    </ScrollView>


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
            <Text>Method: {loadedArray.method}</Text>
            <Text>Brand: {loadedArray.brand}</Text>
            <Text>Roast: {loadedArray.roast}</Text>
            <Text>Grind: {loadedArray.grind}</Text>
            <Text>Water Temp: {loadedArray.waterTemp}{"\n"}</Text>
            <TouchableOpacity onPress={()=>setModalVisible(false)}><Text>Close Modal</Text></TouchableOpacity>
            </View></View></Modal>


    </View>
  };