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
  categoryButton:{
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },
  container: {
    paddingTop: 10,
      flex: 1,
      alignItems: 'center',
      backgroundColor: "#ffffff",
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
      backgroundColor: "#FFFFFF",
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

    pickerHeading:{
      fontSize: 20,
      fontWeight:"bold",
    },

    textLine:{
      marginBottom: 5,
    },

    touchableRecipe:{
     
    },

    recipeContainer:{
      backgroundColor: "#ffffff",
      flex: 1,
    },

    recipeHeadline:{
      fontWeight: "bold",
      fontSize:16,
    }
  });