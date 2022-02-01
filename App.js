import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";

import { styles } from "./styles";

function handleChange(func, text) {
  func(text);
}

export default function App() {
  const [activeEdit, setActiveEdit] = useState(null);
  const [editWindowOpen, setEditWindowOpen] = useState(false);

  const [styleText, setStyleText] = useState("Diner Drip");
  const [brandText, setBrandText] = useState("Coffee brand");
  const [roastText, setRoastText] = useState("Roast type");
  const [grindText, setGrindText] = useState("Grind settings");
  const [waterTempText, setWaterTempText] = useState("Water temp");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Style: </Text>
      <TouchableOpacity
        onPress={() => {
          setEditWindowOpen(!editWindowOpen);
          setActiveEdit("style");
        }}
      >
        <Text>{styleText}</Text>
      </TouchableOpacity>

      {editWindowOpen && activeEdit == "style" ? (
        <TextInput
          autoFocus={true}
          style={styles.input}
          value={styleText}
          onChangeText={(text) => handleChange(setStyleText, text)}
          onEndEditing={() => setEditWindowOpen(false)}
        />
      ) : null}
      <Text>{"\n"}</Text>

      <Text>Coffee Brand: </Text>
      <TouchableOpacity
        onPress={() => {
          setEditWindowOpen(!editWindowOpen);
          setActiveEdit("brand");
        }}
      >
        <Text>{brandText}</Text>
      </TouchableOpacity>
      {editWindowOpen && activeEdit == "brand" ? (
        <TextInput
          autoFocus={true}
          style={styles.input}
          value={brandText}
          onChangeText={(text) => handleChange(setBrandText, text)}
          onEndEditing={() => setEditWindowOpen(false)}
        />
      ) : null}
      <Text>{"\n"}</Text>

      <Text>Roast Style: </Text>
      <TouchableOpacity
        onPress={() => {
          setEditWindowOpen(!editWindowOpen);
          setActiveEdit("roast");
        }}
      >
        <Text>{roastText}</Text>
      </TouchableOpacity>
      {editWindowOpen && activeEdit == "roast" ? (
        <TextInput
          autoFocus={true}
          style={styles.input}
          value={roastText}
          onChangeText={(text) => handleChange(setRoastText, text)}
          onEndEditing={() => setEditWindowOpen(false)}
        />
      ) : null}
      <Text>{"\n"}</Text>

      <Text>Grind Info: </Text>
      <TouchableOpacity
        onPress={() => {
          setEditWindowOpen(!editWindowOpen);
          setActiveEdit("grind");
        }}
      >
        <Text>{grindText}</Text>
      </TouchableOpacity>
      {editWindowOpen && activeEdit == "grind" ? (
        <TextInput
          autoFocus={true}
          style={styles.input}
          value={grindText}
          onChangeText={(text) => handleChange(setGrindText, text)}
          onEndEditing={() => setEditWindowOpen(false)}
        />
      ) : null}
      <Text>{"\n"}</Text>

      <Text>Water Temp: </Text>
      <TouchableOpacity
        onPress={() => {
          setEditWindowOpen(!editWindowOpen);
          setActiveEdit("waterTemp");
        }}
      >
        <Text>{waterTempText}</Text>
      </TouchableOpacity>
      {editWindowOpen && activeEdit == "waterTemp" ? (
        <TextInput
          autoFocus={true}
          style={styles.input}
          value={waterTempText}
          onChangeText={(text) => handleChange(setWaterTempText, text)}
          onEndEditing={() => setEditWindowOpen(false)}
        />
      ) : null}
      <Text>{"\n"}</Text>

      
      <Text>water temp; brew time; dose weight, water volume, General notes</Text>
    </View>
  );
}
