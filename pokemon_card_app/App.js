import { StyleSheet, SafeAreaView , StatusBar ,Platform} from 'react-native';
import PokemonCard from './components/PokemonCard';
import pic from "./assets/download 3.jpeg"

export default function App() {

  const charm={
    name :  "charmander",
    image : pic,
    type : "Fire",
    hp :36,
    moves : ["Scratch" , "Growl","Leer" ,"Ember"],
    weaknesses : ["water" , "Rock"]
  }



  return (
    <SafeAreaView style={styles.container}>
    <PokemonCard {...charm}/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    marginTop : StatusBar.currentHeight,
    paddingTop: Platform.OS === 'android' ? 25 :  0
    },
});
