import { Text, View, StyleSheet, TouchableOpacity, FlatList, SafeAreaView, TextInput, Modal} from "react-native";
import { ModalNovaR } from '../components/modal/novaroupa';
import { ModalRoupaD } from '../components/modal/modalRoupaD';
import { useState } from 'react';
import { Link } from "expo-router";
import * as db from '../components/bd/bd.js';
import { NativeModules } from "react-native";
const DATA = [];
//fazer requisicao pro banco com axios por cliente e popular com for loop
let data = db.getLastRoupa();
console.log(data[0].codigo);
for(let i=1;i<=data[0].codigo;i++){
    let a = db.getEachRoupas(i);
    DATA.push({id:`${a[0].codigo}` ,title:`${a[0].nome}`})
  }

type ItemProps = {title:string};

export default function Index() {
const [modalVis, setModalVis] = useState(false);
const [modalEVis, setModalEVis] = useState(false);
const [codigo, setCodigo] = useState("");
function getCodigo({title}){
  let a = db.getEachRoupasNome(title);
  console.log(a[0].codigo);
  setCodigo(a[0].codigo);
  setModalEVis(true);
}
const Item = ({title}: ItemProps) =>(
  <View>
    <TouchableOpacity style={style.button} onPress={()=>getCodigo({title})}>
        <Text style={style.buttText}>{title}</Text>
        </TouchableOpacity>
  </View>
)
  return (

    
    <SafeAreaView style={style.screen}>
      <View style={style.textInput}>
        <TextInput style={style.inputText} placeholder="Pesquisar roupa..." placeholderTextColor={'#FFF'}>
        </TextInput>
      </View>
      <TouchableOpacity style={style.button} onPress={()=>setModalVis(true)}>
        <Text style={style.buttText}>Adicionar roupa...</Text>
        </TouchableOpacity>
      <FlatList
      data={DATA}
      renderItem={({item}) => <Item title={item.title}/>}
      keyExtractor={item => item.id}
      />
      <Modal visible={modalVis} transparent={true}>
        <ModalNovaR handleClose={setModalVis}/>
      </Modal>
      <Modal visible={modalEVis} transparent={true}>
    <ModalRoupaD handleClose={setModalEVis} val={{codigo}}/>
      </Modal>
      <TouchableOpacity onPress={()=>NativeModules.DevSettings.reload()}>
        <Text>Recarregar</Text>
      </TouchableOpacity>
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
