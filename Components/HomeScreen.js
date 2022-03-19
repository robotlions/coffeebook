import { Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {styles} from '../styles';




export const HomeScreen = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        title="Pourover"
        onPress={() =>
          navigation.navigate('Recipes', { filter: 'Pourover' })
        }
      ><Text style={styles.categoryButton}>Pourover</Text></TouchableOpacity>
      <TouchableOpacity
        title="French Press"
        onPress={() =>
          navigation.navigate('Recipes', { filter: 'French Press' })
        }
      ><Text style={styles.categoryButton}>French Press</Text></TouchableOpacity>
      <TouchableOpacity
        title="Espresso"
        onPress={() =>
          navigation.navigate('Recipes', { filter: 'Espresso' })
        }
      ><Text style={styles.categoryButton}>Espresso</Text></TouchableOpacity>
      <TouchableOpacity
        title="AeroPress"
        onPress={() =>
          navigation.navigate('Recipes', { filter: 'AeroPress' })
        }
      ><Text style={styles.categoryButton}>AeroPress</Text></TouchableOpacity>
      <TouchableOpacity
        title="Drip Coffee Maker"
        onPress={() =>
          navigation.navigate('Recipes', { filter: 'Drip' })
        }
      ><Text style={styles.categoryButton}>Drip Coffee Maker</Text></TouchableOpacity>
      <TouchableOpacity
        title="Moka Pot"
        onPress={() =>
          navigation.navigate('Recipes', { filter: 'Moka Pot' })
        }
      ><Text style={styles.categoryButton}>Moka Pot</Text></TouchableOpacity>
      <TouchableOpacity
        title="Percolator"
        onPress={() =>
          navigation.navigate('Recipes', { filter: 'Percolator' })
        }
      ><Text style={styles.categoryButton}>Percolator</Text></TouchableOpacity>
      <TouchableOpacity
        title="Other"
        onPress={() =>
          navigation.navigate('Recipes', { filter: 'Other' })
        }
      ><Text style={styles.categoryButton}>Other</Text></TouchableOpacity>
       <TouchableOpacity
        title="New Recipe"
        onPress={() =>
          navigation.navigate('New Recipe')
        }
      ><Text style={styles.categoryButton}>Create New Recipe</Text></TouchableOpacity>
      
      </ScrollView>
    );
  };