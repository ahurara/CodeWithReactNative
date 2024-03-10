
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View ,StatusBar, SafeAreaView,ActivityIndicator ,FlatList} from 'react-native';

export default function App() {

  const [postList , setPostList] = useState([]);
  const [loading , setLoading] = useState(true);
  const [refreshing , setRefreshing] = useState(false);

  const fetchData = async(limit = 10)=>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
    const data = await response.json();
    setPostList(data);
  } 

  const handleRefresh =()=>{
    setRefreshing(true);
    fetchData(20);
    setRefreshing(false);
  }

  useEffect(()=>{
    setTimeout(()=>{
      fetchData();
      setLoading(false);
    },2000)
  },[])

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.listContainer}>
    {loading ? 
    (<View style={styles.loading}>
      <ActivityIndicator  size="large" color='0000ff' />
      <Text style={styles.loadingText}>Loading...</Text>
    </View>) :
    (
      <FlatList
      data={postList}

      renderItem={({item})=>{
        return (
          <View style={styles.card}>
            <Text style={styles.titleText}>{item.title}</Text>
            <Text style={styles.bodyText}>{item.body}</Text>
          </View>
        )
      }}

      ItemSeparatorComponent={()=>(
        <View style={{height:16} }/>
      )}

      ListEmptyComponent={<Text>No Text Found</Text>}

      ListHeaderComponent={<Text style={styles.header}>Json PlaceHolder</Text>}

      ListFooterComponent={<Text style={styles.footer}>The End!</Text>}

      refreshing={refreshing}

      onRefresh={handleRefresh}
       />
      ) }
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
   paddingTop: StatusBar.currentHeight,
  },
  listContainer:{
    flex:1,
    paddingHorizontal:15,
  },
  card:{
    backgroundColor:'white',
    padding:16,
    borderRadius:8,
    borderWidth:1
  },
  titleText:{
    fontSize:20
  },
  bodyText:{
    fontSize:15,
    color:"#666666"
  },
  header:{
    alignSelf:"center",
    fontWeight:'bold',
    fontSize:30,
    marginBottom:15
  },
  footer:{
    alignSelf:"center",
    fontWeight:'bold',
    fontSize:30,
    margin:15
  },
  loading:{
    flex:1,
    flexDirection:"column",
    alignItems:'center',
    justifyContent:'center'

  },
  loadingText:{
    fontSize:25,
    fontWeight:'600'
  }



});
