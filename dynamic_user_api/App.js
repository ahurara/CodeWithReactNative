import { StyleSheet, Text, View , Dimensions ,useWindowDimensions} from 'react-native';

export default function App() {

  const { width, height } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View style={[styles.box,
      { width: width>500 ? '70%' : '90%',
        height: height>600 ?'60%' : '90%',}]}>
      <Text style={{fontSize: width> 500 ? 50 : 24,}}>Hello</Text>
      </View>
    </View>
  );
}

  //drawback of dimension api is that it does'nt update dynamically based on changes in window dimension (potrait to landscap)
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box:{
    backgroundColor:"lightblue",
    alignItems:'center',
    justifyContent:'center',
  },
 
});
