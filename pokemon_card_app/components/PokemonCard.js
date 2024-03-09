import {Text ,Image, View ,StyleSheet, Platform} from 'react-native';


const getTypeInfo = (type) =>{
    switch(type.toLowerCase()){
         case "electric" :
            return{borderColor: '#ffD700' , emoji:'\u26A1'};
            case "water" :
            return{borderColor: '#6493EA' , emoji:'\uD83D\uDCA7'};
            case "fire" :
                return{borderColor: '#ff5733' , emoji:'\uD83D\uDD25'};
                case "grass" :
                    return{borderColor: '#66CC66' , emoji:'\uD83C\uDF3F'};
                    default :
                        return{borderColor: '#ABABAB' , emoji:'\u274C'};
                        


    }
}

export default function PokemonCard({name , image , type ,hp ,moves , weaknesses}){

    const {borderColor , emoji} = getTypeInfo(type);

    return(
        <View style={style.card}>
           
           <View style={style.nameContainer}>
            <Text style={style.name}>{name}</Text>
            <Text style={style.hp}>{"\u2764"}{hp}</Text>
           </View>

        <Image style={style.img} resizeMode="contain" source={image} accessibilityLabel={`${name} Pokemon`} />

        <View style={style.typeContainer}>
        <View style={[ style.badge,{borderColor}]}>
        <Text style={style.typeEmoji}>{emoji}</Text>
            <Text style={style.typeText }>{type}</Text>
            </View>
        </View>


        <View style={style.moveContainer}>
            <Text style={style.moveText}>Moves: {moves.join(", ")}</Text>
        </View>

        <View style={style.weakConatiner}>
            <Text style={style.weakText} >weaknesses: {weaknesses.join(", ")}</Text>
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
        marginBottom:10
    },
    name:{
        fontSize:25,
        fontWeight:'bold'
    },
    hp:{
        fontSize:18
    },
    img:{
        width:'100%',
        height:150,
        marginBottom:16
    },
    typeContainer:{
        marginBottom:20,
        alignItems:'center'
    },
    badge:{
        flexDirection:"row",
        alignItems:'center',
        paddingVertical:2,
        paddingHorizontal:10,
        borderRadius:20,
        borderWidth:3
    },
    typeEmoji:{
        fontSize:18,
        marginRight:12
    },
    typeText:{
        fontSize:18,
        fontWeight:"bold"
    },
    moveContainer:{
        marginBottom:10
    },
    moveText:{
        fontSize:18,
        fontWeight:"bold"
    },
    weakConatiner:{
        marginBottom:8
    },
    weakText:{
        fontSize:18,
        fontWeight:'bold'
    }


})