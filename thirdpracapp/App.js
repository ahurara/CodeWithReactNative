import { StatusBar  } from 'expo-status-bar';
import { StyleSheet, Text, View , ActivityIndicator, Button } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {

  const [isContent , setIsContent] = useState(false);
  const [loading, setLoading] = useState(false);
 
  const handlePress = () => {
    if(isContent == false)
    {
    setLoading(true);
    
    // Simulate asynchronous operation (e.g., fetching data)
    setTimeout(() => {
      setLoading(false);
      setIsContent((prev) => !prev);
    }, 3000);
  }else{
    setIsContent((prev) => !prev);
  }
  };


  return (
    <View style={{flex:1, backgroundColor:'grey',justifyContent:'center', alignItems:'center'}}>
     
     
     { loading ?
       (
        <ActivityIndicator 
      size="large"
      color="black"
      
     />
       )
       :
       isContent &&
       (
        <View style={{paddingLeft:40, paddingRight:40}}>
        <Text>
             ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
               commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
               fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
                </Text>
                </View>
       )

       }

     <View style={{paddingTop:100, width:200 }}>
      <Button
      title='Press to Show text'
      onPress={handlePress}
       />
       </View>
       


    </View>
  );
}
