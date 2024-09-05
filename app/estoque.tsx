import { Text, View, StyleSheet, TouchableOpacity, FlatList, SafeAreaView, TextInput} from "react-native";
import { NavigationContainer } from '@react-navigation/native'
import { Link } from "expo-router";


const DATA = [
  {
    id: '1',
    title: 'Roupa A',
  },
  {
    id: '2',
    title: 'Roupa B',
  },
  {
    id: '3',
    title: 'Roupa C',
  },
  {
    id: '4',
    title:'Roupa D'
  },
  {
    id:'5',
    title:'Roupa E'
  },
  {
    id: '6',
    title: 'Roupa F',
  },
  {
    id: '7',
    title: 'Roupa G',
  },
  {
    id: '8',
    title: 'Roupa H',
  },
  {
    id: '9',
    title:'Roupa I'
  },
  {
    id:'10',
    title:'Roupa J'
  },
  {
    id: '11',
    title: 'Roupa K',
  },
  {
    id: '12',
    title: 'Roupa L',
  },
  {
    id: '13',
    title: 'Roupa M',
  },
  {
    id: '14',
    title:'Roupa N'
  },
  {
    id:'15',
    title:'Roupa O'
  }
];

type ItemProps = {title:string};

const Item = ({title}: ItemProps) =>(
  <View>
    <TouchableOpacity style={style.button}>
        <Link style={style.buttText} href={'/'}>{title}</Link>
        </TouchableOpacity>
  </View>
)

export default function Index() {
  return (

    
    <SafeAreaView style={style.screen}>
      <View style={style.textInput}>
        <TextInput style={style.inputText} placeholder="Pesquisar roupa..." placeholderTextColor={'#FFF'}>
        </TextInput>
      </View>
      <TouchableOpacity style={style.button}>
        <Link style={style.buttText} href={'/'}>Adicionar roupa...</Link>
        </TouchableOpacity>
      <FlatList
      data={DATA}
      renderItem={({item}) => <Item title={item.title}/>}
      keyExtractor={item => item.id}
      />

    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  screen:{
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'#FFF',
  },
  image:{
    height:'50%',
    width:'50%',
    resizeMode:'contain'
  },
  textInput:{
    borderWidth:1,
    width:'60%',
    height:'5%',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:18,
    backgroundColor:'#646688',
    marginBottom:20,
    marginTop:50
  },
  inputText:{
    fontSize:25, 
    fontWeight:'bold',
    color:'#FFF',
  }
  ,
  button:{
    backgroundColor:'#fb924e',
    borderRadius:20,
    padding:15,
    marginTop:10,
    width:250,
    justifyContent:'center',
    alignItems:'center',
  },
  buttText:{
    fontSize:20,
    fontWeight:'bold'
  },
})
