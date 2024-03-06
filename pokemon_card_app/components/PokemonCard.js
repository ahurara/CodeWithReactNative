import {Text ,Image, View ,StyleSheet, Platform} from 'react-native'

export default function PokemonCard({name , image , type ,hp ,moves , weaknesses}){
    return(
        <View style={style.card}>
           
           <View style={style.nameContainer}>
            <Text style={style.name}>{name}</Text>
            <Text style={style.hp}>{"\u2764"}{hp}</Text>
           </View>

        <Image style={style.img} resizeMode="contain" source={image} accessibilityLabel={`${name} Pokemon`} />

        <View>
            <Text>{type}</Text>
        </View>

        <View>
            <Text>Moves: {moves.join(", ")}</Text>
        </View>

        <View>
            <Text>weaknesses: {weaknesses.join(", ")}</Text>
        </View>

         </View>
    )
}

const style = StyleSheet.create({
    card :{
        backgroundColor:'white',
        borderRadius :16,
        borderWidth:2,
        padding : 16,
        margin: 16,
        ...Platform.select({
            ios:{
               shadowOffset : {width :2 , height :2},
               shadowColor : '#333',
               shadowOpacity : 0.3,
               shadowRadius : 4
            },
            android:{
                elevation : 5
            }
        })
    },
    nameContainer:{
        flexDirection : 'row',
        justifyContent:'space-between',
        marginBottom:32
    },
    name:{
        fontSize:30,
        fontWeight:'bold'
    },
    hp:{
        fontSize:22
    },
    img:{
        width:'100%',
        height:200,
        marginBottom:16
    }


})