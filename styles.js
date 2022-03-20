import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  backgroundView: {
    backgroundColor: "rgba(52, 52, 52, 0.7)",
    height: "100%",
    paddingBottom: 75,
  },

  button: {
    textAlign: "center",
    backgroundColor: "lightblue",
    width: 120,
    height: 25,
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
    color: "#f6eee3",
    backgroundColor: "#d9bda5",
    // textShadowColor: "rgba(0, 0, 0, .4)",
    // textShadowOffset: {
    //   width: 1,
    //   height: 1,
    // },
    // textShadowRadius: 4,
    textAlignVertical: "center",
    elevation: 5,
  },


  container: {
    paddingTop: 10,
    flex: 1,
    alignItems: 'center',
    // backgroundColor: "#ffffff",
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
  },

  recipeHeading: {
    height: 50,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "#9f8d73",
    backgroundColor: "#f2e5bb",
    textShadowColor: "rgba(0, 0, 0, .25)",
    textShadowOffset: {
      width: 1,
      height: 2,
    },
    textShadowRadius: 4,
  },

  textLine: {
    marginBottom: 5,
  },

  touchableRecipe: {

  },


});