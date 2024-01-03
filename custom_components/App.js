import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Greet from './Component/Greet';
import { useState } from 'react';

export default function App() {

  const [mode, setMode]= useState(true);

  return (
    <View style={[styles.container,{paddingLeft:30}]}>
      <StatusBar backgroundColor='white' barStyle="dark-content"/>
    <View style={{marginTop:50}}>
      <Greet name="Abu Hurara"  txtStyle={styles.textStyle} />
      </View>
      {
        //style support inheritance within the text(limited), but diesnt support inheritance from view to text
      }

      <Pressable onPress={()=>setMode(!mode)}>
      <View style={ mode? styles.darkmode: styles.lightMode}>
        <Text style={mode? styles.darkModeText: styles.ligthModeText}>Hello there it's me <Text style={styles.bold}>Abu Hurara</Text></Text>
      </View>
      </Pressable>

      <View style={[styles.box,styles.bgr,styles.border]}>
        <Text>Hello with red backgroundColor</Text>
      </View>

      <View style={[styles.box,styles.bgy]}>
        <Text>Hello with yellow backgroundColor</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create(
  {
    container : {flex:1,backgroundColor:'plum'},
    textStyle:{color:'white'},
    box:{
      height:100 , 
      width: 100, 
      marginTop:20,
      marginLeft:10,
      paddingTop:10,
      paddingLeft:10,
    },
    bgr:{backgroundColor:"red"},
    bgy:{backgroundColor:"yellow"},
    border:{
      borderWidth:3,
      borderColor:'purple',
      borderStyle:"solid",
      borderRadius:20
    },
    boxShadow:{
      shadowColor:'black',
      shadowOffset:{
        width:10,
        height:10
      },
      shadowOpacity:0.9,
      shadowRadius:9,
      androidShadow:{
        elevation:10 
      },
    
    },

    darkmode:{
      backgroundColor:'black',
      width:300
    },
    lightMode:{
      backgroundColor:'white',
      width:300
      
    },
    darkModeText:{
      color:'white',
      padding:20
    },
    ligthModeText:{
      color:'black',
      padding:20
    },
    bold:{
      fontWeight:'bold'
    }

  }
)
