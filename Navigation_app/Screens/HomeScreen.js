import { View, Text ,StyleSheet, Button} from "react-native";
import {useNavigation } from "@react-navigation/native";

export default function HomeScreen({navigation , route}){

    

    //use navigation porp for all the screen and use this hook when necessary
    //const navigation = useNavigation();

    //also a way to pass the data
    // <Button title="About us" onPress={()=>{navigation.navigate('about',{name :'champ'})}} />
    return(
        <View style={styles.Container}>
            <Text style={styles.Text}>Home Screen</Text>
            <Text style={styles.Text}>{ route.params?.name}</Text>
            <Button title="About us" onPress={()=>{navigation.navigate('about')}} />
        </View>
    )
}

const styles = StyleSheet.create({
    Container :{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'lightgrey'
    },
    Text:{
        fontSize:30,
        fontWeight:'bold',
        
    }
})