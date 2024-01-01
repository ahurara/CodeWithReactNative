import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Alert, Button} from 'react-native';

export default function App(){

  const createTwoButton=()=>{
    Alert.alert("Invalid Data","Please provide",[
      {
        text:'Cancel',
        onPress: ()=>console.log("Cancel pressed"),
        

      },
      {
        text:'Add Data',
        onPress: ()=>console.log("Add data pressed")
      }
     
    ])
  }


  const createThreeButton=()=>[
   /* Alert.alert(
      'Invalid Data',
      'Please provide a valid value because this is the message body of the alert',
      [
        {
          title:'Ask Later',
          onPress:()=>{console.log("Ask later pressed")}
        },
        {
          title:'Cancel',
          onPress:()=>{console.log("Cancel pressed")}
        },
        {
          title:'OK',
          onPress:()=>{console.log("Ok pressed")}
        }
      ]
    )*/

    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ])
  ]

  return(
    <View style={{flex:1, backgroundColor:"plum", padding: 60}}>
   
   <StatusBar backgroundColor='white' />
<View style={{padding:20}}>
  <Button 
  title='Alert wid title'
  onPress={()=> Alert.alert("Invalid Data")} />
  </View>

  <View style={{padding:20}}>
    <Button
      title='Alert With title and msg'
      onPress={()=>Alert.alert("Invalid Data","Please provide a valid value because this is the message body of the alert ")}
    />
    </View>


    {
      // by dafault alert has a single ok button but u can have atleast 3 button if working for andorid
    }

    <View style={{padding:20}}>
    <Button
      title='Alert With title and button'
      onPress={createTwoButton}
    />
</View>

<View style={{padding:20}}>
    <Button
      title='Alert With title and button'
      onPress={createThreeButton}
    />
</View>


    </View>
  )
}