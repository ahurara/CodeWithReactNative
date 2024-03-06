import { StyleSheet, Text, View , Dimensions ,useWindowDimensions , SafeAreaView ,StatusBar ,Platform} from 'react-native';


// safeAreaView is used to make the element not hide under the nothc or upper side of the screen
export default function App() {

  //drawback of dimension api is that it does'nt update dynamically based on changes in window dimension (potrait to landscap)
  // const windowWidth = Dimensions.get("window").width;
  // const windowHeight = Dimensions.get("window").height;
  
  const { width, height } = useWindowDimensions();

  return (

    <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
    <Text style={[{fontSize:22},styles.text]}>Welcome </Text>
      <View style={[styles.box,
      { width: width>500 ? '70%' : '90%',
        height: height>600 ?'60%' : '90%',}]}>
      <Text style={{fontSize: width> 500 ? 50 : 24,}}>Hello</Text>
      </View>
    </View>
    </SafeAreaView>
  );

}

  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
    //justifyContent: 'center',
    
    //this line gives the paddig only to the android device
    //this line is used to change a single style property 
    paddingTop: Platform.OS === "android" ? 25 : 0
  },
  box:{
    backgroundColor:"lightblue",
    alignItems:'center',
    justifyContent:'center',
  },
  safeArea:{
    flex:1,
    backgroundColor:'red',
    marginTop:StatusBar.currentHeight
    
  },
  text :{
     ...Platform.select({
      ios:{
        color:'purple'
      },
      android:{
        color:'grey',
        fontSize:29
      },
      
    }),
    fontWeight:'bold',
  }
 
});

/* u can also code separately for the devices (android / ios) just save the components like (button.ios.js and button.android.js)
reactnative will automatically execute the code based on the platform u using
*/