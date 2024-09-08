import { Text, View, StyleSheet, TouchableOpacity, FlatList, Modal, SafeAreaView, TextInput} from "react-native";
import { NavigationContainer } from '@react-navigation/native'
import {ModalNovoC} from '../components/modal/novocliente'
import {useState} from 'react'
import { Link } from "expo-router";


const DATA = [
  {
    id: '1',
    title: 'Cliente A',
  },
  {
    id: '2',
    title: 'Cliente B',
  },
  {
    id: '3',
    title: 'Cliente C',
  },
  {
    id: '4',
    title:'Cliente D'
  },
  {
    id:'5',
    title:'Cliente E'
  },
  {
    id: '6',
    title: 'Cliente F',
  },
  {
    id: '7',
    title: 'Cliente G',
  },
  {
    id: '8',
    title: 'Cliente H',
  },
  {
    id: '9',
    title:'Cliente I'
  },
  {
    id:'10',
    title:'Cliente J'
  },
  {
    id: '11',
    title: 'Cliente K',
  },
  {
    id: '12',
    title: 'Cliente L',
  },
  {
    id: '13',
    title: 'Cliente M',
  },
  {
    id: '14',
    title:'Cliente N'
  },
  {
    id:'15',
    title:'Cliente O'
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
  const [modalNovoCVisible, setModalNovoCVisible] = useState(false);
  return (
    
    <SafeAreaView style={style.screen}>
      <View style={style.textInput}>
        <TextInput style={style.inputText} placeholder="Pesquisar cliente..." placeholderTextColor={'#FFF'}>
        </TextInput>
      </View>
      <TouchableOpacity style={style.button} onPress={()=>setModalNovoCVisible(true)}>
        <Text style={style.buttText}>Novo cliente...</Text>
        </TouchableOpacity>
      <FlatList
      data={DATA}
      renderItem={({item}) => <Item title={item.title}/>}
      keyExtractor={item => item.id}
      />
      <Modal visible={modalNovoCVisible} transparent={true}>
        <ModalNovoC handleClose={()=>setModalNovoCVisible(false)}/>
      </Modal>
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
