import { View, Text ,StyleSheet, TextComponent , Button} from "react-native";

export default function Aboutcreen({route , navigation}){

    const {name}= route.params; 
    
    return(
        <View style={styles.Container}>
            <Text style={styles.Text}>About us! Screen {name}</Text>
            <Button title="Update the name" onPress={()=>navigation.setParams({
                
                name : `Champ updated`
            })}  />

            <Button title="Send data to Home Screen" onPress={()=>navigation.navigate("home" , {name:'Updated Champ'})}  />
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