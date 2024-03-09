import { useState } from 'react';
import { StyleSheet, Text, View , StatusBar , SafeAreaView , TextInput , Switch} from 'react-native';

export default function App() {

  const [name , setName] = useState("");
  const [isDarkMode , setDarkMode] = useState(false);

  return (
  <SafeAreaView style={styles.container}>


  <TextInput style={styles.input}
    value={name} 
    onChangeText={setName} 
    placeholder='write your name'
    //secureTextEntry
    autoCorrect={false}
    autoCapitalize='none'

    /> 
  
  {/* // for multiline input */}
  <TextInput style={[styles.input , styles.multilineInput]} placeholder="Type your Message" multiline/> 



  <Text style={styles.text}>my Name is {name}</Text>

    <View style={styles.switchContainer}>
      <Text style={styles.text}>Dark mode</Text>
      <Switch value={isDarkMode} onChange={()=>setDarkMode((prevState) => !prevState)}
      trackColor={{false:'white' , true:'blue'}}
      thumbColor="white" />
    </View>
  
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {  
    flex: 1,
    backgroundColor: '#3626',
    paddingTop: StatusBar.currentHeight
  },
  input:{
    height:40,
    width:'80%',
    padding:10,
    margin:12,
    borderColor:'grey',
    borderWidth:2
  },
  multilineInput:{
    minHeight:100,
    textAlignVertical:'top'
  },
  text:{
    fontSize:20,
    padding:12
  },
  switchContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:10,
  }
});
