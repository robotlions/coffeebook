import {Button, View, ScrollView} from 'react-native';
import {styles} from '../styles';




export const HomeScreen = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
      <Button
        title="Pourover"
        onPress={() =>
          navigation.navigate('Recipe', { filter: 'Pourover' })
        }
      />
      <Button
        title="French Press"
        onPress={() =>
          navigation.navigate('Recipe', { filter: 'French Press' })
        }
      />
      <Button
        title="Espresso"
        onPress={() =>
          navigation.navigate('Recipe', { filter: 'Espresso' })
        }
      />
      <Button
        title="AeroPress"
        onPress={() =>
          navigation.navigate('Recipe', { filter: 'AeroPress' })
        }
      />
      <Button
        title="Drip Coffee Maker"
        onPress={() =>
          navigation.navigate('Recipe', { filter: 'Drip' })
        }
      />
      <Button
        title="Moka Pot"
        onPress={() =>
          navigation.navigate('Recipe', { filter: 'Moka Pot' })
        }
      />
      <Button
        title="Percolator"
        onPress={() =>
          navigation.navigate('Recipe', { filter: 'Percolator' })
        }
      />
      <Button
        title="Custom"
        onPress={() =>
          navigation.navigate('Recipe', { filter: 'custom' })
        }
      />
       <Button
        title="New Recipe"
        onPress={() =>
          navigation.navigate('New Recipe')
        }
      />
      
      </ScrollView>
    );
  };