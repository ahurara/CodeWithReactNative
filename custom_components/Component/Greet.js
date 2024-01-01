import {View,Text} from "react-native";

export default function Greet({name , txtStyle}){
    return(
        <View style={{padding:30}}>
        <Text style={txtStyle}>My name is : {name}</Text>
    </View>

    )
}