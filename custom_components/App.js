import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Greet from './Component/Greet';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='white' barStyle="dark-content"/>
      <Greet name="Abu Hurara"  txtStyle={styles.textStyle} />
      <Greet name="Anonymous"/>
      
    </View>
  );
}


const styles = StyleSheet.create(
  {
    container : {flex:1,backgroundColor:'green'},
    textStyle:{color:'white'}
  }
)
