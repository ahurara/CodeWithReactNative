import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput , Button , Image , KeyboardAvoidingView ,Platform} from 'react-native';

export default function App() {

  const [Username , setUsername] = useState('');
  const [password , setPassword] = useState('');
  const [error , setError] = useState({});

  const validateForm =() =>{
    let errors ={};

    if(Username === '') errors.username = "UserName is required";
    if(password === '') errors.password = "Password is required";

    setError(errors);

    /*If there are no errors (i.e., if the length of the array returned by
     Object.keys(errors) is 0), it returns true, indicating that the form is valid. */

    return Object.keys(errors).length === 0;
  }

  const handleSubmit = () =>{
    if(validateForm()){
      console.log(`submitted ${Username} ${password}`);
      setUsername("");
      setPassword("");
      setError({})
    }
  }

  return (
  <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={Platform.OS === "ios" ? 100 :100 }>
    <View style={styles.form}>

    <Image source={require("./assets/—Pngtree—user vector avatar_4830521.png")} style={styles.img} />

    <Text style={styles.label}>Username</Text>
    <TextInput style={styles.input} placeholder='Enter your Username' value={Username} onChangeText={setUsername} />
{
  error.username ? (<Text style={styles.err}>{error.username}</Text> ): null
}
    <Text style={styles.label}>Password</Text>
    <TextInput  style={styles.input} placeholder='Enter your Password' value={password} onChangeText={setPassword} />
{
  error.password ? (<Text style={styles.err}>{error.password}</Text>) : null
}
    <Button title='Login' onPress={handleSubmit} />

     </View>
   </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    paddingHorizontal:20
  },
  form:{
    backgroundColor:'white',
    padding:20,
    borderRadius:10,
    shadowColor:'black',
    shadowOffset :{
      width:0,
      height:2
    },
    shadowOpacity:0.25,
    elevation:5
  },
label:{
  fontSize:15,
  fontWeight:'bold',
  marginBottom:5
},
input:{
  height:40,
  borderColor:'#ddd',
  borderWidth:2,
  borderRadius:10,
  marginBottom:15,
  padding:10
},
img:{
  width:200,
  height:300,
  marginBottom:40,
  alignSelf:'center'
},
err:{
  color:'red',
  marginBottom:10
}

});
