import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  backgroundView:{
    backgroundColor: "rgba(52, 52, 52, 0.7)",
    height:"100%",
    paddingBottom:75,
  },
  
  button:{
      textAlign: "center",
      backgroundColor: "lightblue",
      width: 120,
      height: 25,
    },

    buttonRow:{
      alignItems: "center",
    },
  
  container: {
      flex: 1,
      backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
    },

    input: {
      height: 40,
      margin: 12,
      padding: 10,
      width: "85%",
    },

    modalView: {
      margin: 30,
      backgroundColor: "#FFFFF3",
      borderRadius: 20,
      padding: 15,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },

    textLine:{
      marginBottom: 5,
    },

    recipeHeadline:{
      fontWeight: "bold",
      fontSize:16,
    }
  });