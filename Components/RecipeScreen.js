import {View, ScrollView, Text, Modal, TouchableOpacity} from 'react-native';
import { testLoadArray } from './DefaultRecipes';
import {useState} from 'react';
import {styles} from '../styles';

export const RecipeScreen = ({ navigation, route}) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [loadedArray, setLoadedArray] = useState({method: "default method"});

    function activateModal(value){
        setModalVisible(true);
        setLoadedArray({method:value.method,brand:value.brand,roast:value.roast,grind:value.grind,waterTemp:value.waterTemp})
    }


    return <View><ScrollView>
  <Text>
    {route.params.filter}{"\n"}</Text>
    <Text>
    {testLoadArray.map((value, index) => (route.params.filter == value.method && <TouchableOpacity key={index} onPress={()=>activateModal(value)}><Text>Method: {value.method}{"\n"}Brand: {value.brand}{"\n"}Roast: {value.roast}{"\n"}Grind: {value.grind}{"\n"}Water Temp: {value.waterTemp}{"\n"}{"\n"}</Text></TouchableOpacity>))}
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