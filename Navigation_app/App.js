import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from './Screens/HomeScreen';
import Aboutcreen from './Screens/AboutScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='home' screenOptions={{ title:'Welcome Home ',
          headerStyle:{
            backgroundColor:'purple'
          },
          headerTintColor:'#fff',
          headerTitleStyle:{
            fontWeight:'bold',
            
          },
          headerLeft:()=>(
            <Pressable onPress={()=>{alert("Menu Button pressed")}} >
            <Text style={{color:'#fff',fontSize:16,fontWeight:'bold'}}>Menu</Text>
            </Pressable>
          ),
          contentStyle:{
            backgroundColor:'#e8e4f3'
          }}}>
      <Stack.Screen name='home' component={HomeScreen}/>

      {/* //set a default data for the screen */}
      <Stack.Screen name='about' component={Aboutcreen} 
      initialParams={{
        name:'Champ'
        }} options={({route})=>({
          title: route.params.name
        })
        }

        />

    </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
