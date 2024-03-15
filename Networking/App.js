
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View ,StatusBar, SafeAreaView,ActivityIndicator ,FlatList, TextInput, Button} from 'react-native';

export default function App() {

  const [postList , setPostList] = useState([]);
  const [loading , setLoading] = useState(true);
  const [refreshing , setRefreshing] = useState(false);

  //for post request
  const [postTitle , setPostTitle] = useState('');
  const [postBody , setPostBody] = useState('');
  const [isPosting , setIsPosting] = useState(false);

  //to catch error
  const [err ,setError] = useState('');

  const fetchData = async(limit = 10)=>{
    try{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
    const data = await response.json();
    setPostList(data);
  }catch(err){
    console.error("Erro in fetching api "+ err);
    setError('Failed to fetch the api');
  }

  } 

    const addPost = async() =>{
      try{
      setIsPosting(true);
      const response =await  fetch('https://jsonplaceholder.typicode.com/posts',{
        method : 'post',
        headers :{
          "Content-Type" : "application/json"
        },
        body:JSON.stringify({
          title :postTitle,
          body : postBody
        })
      })
      const newPost = await response.json();
      setPostList(prevList =>[newPost , ...prevList] );
      setPostTitle('');
      setPostBody('');
      setIsPosting(false);
      setError('');
    }catch(err){
      console.error("Error in post api ", err);
      setError("Failed to add the post")

    }

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
    {err ?(
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{err}</Text>
      </View>):(
    <>
    <View style={styles.inputContainer}>
    <TextInput style={styles.input} placeholder='Post Title' value={postTitle} onChangeText={setPostTitle}/>
    <TextInput style={styles.input} placeholder='Post Body' value={postBody} onChangeText={setPostBody}/>
    <Button title={isPosting ? 'Adding ...' : "Add Post"} onPress={addPost} disabled={isPosting}/>
    </View>
    
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
    </>)}
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
  },
  inputContainer:{
    backgroundColor:'white',
    padding:16,
    borderRadius:8,
    borderWidth:2,
    margin:16
  },
  input:{
    height:40,
    borderColor:'grey',
    borderWidth:2,
    borderRadius:8,
    marginBottom:8,
    padding:8
  },
  errorContainer:{
    backgroundColor :'#ffc0cb',
    padding:16,
    borderRadius:8,
    borderWidth:2,
    margin:16,
    alignItems:'center'
  },
  errorText:{
    color:'#08000c',
    fontSize:16,
    textAlign:'center'
  }



});
