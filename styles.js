import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  backgroundView: {
    backgroundColor: "rgba(52, 52, 52, 0.7)",
    height: "100%",
    paddingBottom: 75,
  },

  button: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 20,
    textAlign: "center",
    width: 120,
    height: 35,
    backgroundColor: "#eaeaea",
    elevation: 4,
  },

  buttonRow: {
    alignItems: "center",
  },

  categoryButton: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    height: 100,
    width: 100,
    margin: 10,
    color: "#000000",
    textAlignVertical: "center",
    backgroundColor: "#eaeaea",
    elevation: 4,
  },


  container: {
    paddingTop: 10,
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#ffffff",
    justifyContent: 'center',
    flexDirection: "row",
    flexWrap: "wrap",
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

  pickerHeading: {
    fontSize: 20,
    fontWeight: "bold",
  },

  recipeContainer: {
    backgroundColor: "#ffffff",
    flex: 1,
  },

  recipeHeadline: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#000000",
  },

  recipeHeading: {
    height: 50,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "#000000",
   },


  textLine: {
    marginBottom: 5,
  },

  touchableRecipe: {
    backgroundColor: "#eaeaea",
    marginBottom: 10,
    paddingLeft:15,
  },


});