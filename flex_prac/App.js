import { StyleSheet, Text, View } from 'react-native';
import Box from './components/box';

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{backgroundColor:'#8e9b00'}}>Box 1</Box>
      <Box style={{backgroundColor:'#b65d1f'}}>Box 2</Box>
      <Box style={{backgroundColor:'#1c4c56', flexGrow:3}}>Box 3</Box>
      <Box style={{backgroundColor:'#ab9156', flexGrow:1}}>Box 4</Box>
      {/* <Box style={{backgroundColor:'#6b0803' , alignSelf:'center'}}>Box 5</Box> */}
      {/* <Box style={{backgroundColor:'#1c4c56'}}>Box 6</Box>
      <Box style={{backgroundColor:'#b95f21'}}>Box 7</Box> */}
    </View>
  );
}
{
  //flexDirection (column = top to bottom) (coloumn-reverse = bottom to top ) (row = left to right) (row-reverse = right to left)
  
  //justifyContent (flex-start = oject at the start ) (flex-end = object placed at the end) w.r.t the flex direction 
  
  //alignItem is applied to the container and control the alignment of all the itens inside it. (Similar to justify content but works perpendicular)

  //aligSelf is applied to the individual item and control the alignment of it 

  //flexwrap is applied when dealing with limited height to crap the items inside the given height 

  //use rowgap and columngap to get gap in row and column specifically otherwise use gap for consistent gap in row and column

  //use flexshrink when the flex is smaller then the item it has this property will divide the space with the item inside flex

  //use flexGrow when the flex area is larger then the item it has so item takes the remaining space

  /*alignItems aligns flex items along the cross-axis of the flex container on a single line, while alignConten
  t aligns multiple lines of flex items within the container. */
}


const styles = StyleSheet.create({
  container: {
   marginTop:64,
   borderWidth:6,
   borderColor:'red',
    //flex:1,
   flexDirection:"column",
   justifyContent:"flex-start",
   alignContent:"center",
    height:300,
  //  width:200,
   flexWrap:'wrap',
  //  rowGap:20,
  //  columnGap:20
  // gap:10


  },
});
