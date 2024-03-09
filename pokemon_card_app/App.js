import { StyleSheet, SafeAreaView , StatusBar ,Platform , ScrollView,Text, FlatList, View} from 'react-native';
import PokemonCard from './components/PokemonCard';
import pokemon from './components/objects';

export default function App() {




  return (
    <SafeAreaView style={styles.container}>
     {/* map is not an ideal to generate a list of large ui elements, FlatList is*/}
    {/* <ScrollView>
   
    {
      
      pokemon.map(e=>{
        return (<PokemonCard {...e} />)
      })
    }
    </ScrollView> */}
    <FlatList 
    
     data = {pokemon}
     renderItem={({item}) => { return (<PokemonCard key={item.id} {...item}/>)}}

     // for horizontal rendering
     //horizontal

    //It deparated the element with anything excluding the first and the last element
     ItemSeparatorComponent={<View style={{backgroundColor:'black'}}><Text style={{color:'white',alignSelf:'center'}}>item separated by text</Text></View>}

     //if no data found this runs. can be used for error handling if data from api is null
     ListEmptyComponent={<Text>No data found</Text>}

     //it is used to show anything at the start of the list
     ListHeaderComponent={<Text style={{alignSelf:'center', fontWeight:'bold' , fontSize:30}}>Pokemon Cards</Text>}
    
    //used to show anything at the bottom
    ListFooterComponent={<Text style={{alignSelf:'center', fontWeight:'bold' , fontSize:30,marginBottom:10}}>The End</Text>}
     >

     </FlatList>
  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    marginTop : StatusBar.currentHeight,
    paddingTop: Platform.OS === 'android' ? 5 :  0
    },
});
