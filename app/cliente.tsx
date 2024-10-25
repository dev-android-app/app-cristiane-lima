import { Text, View, StyleSheet, TouchableOpacity, FlatList, Modal, SafeAreaView, TextInput} from "react-native";
import {ModalNovoC} from '../components/modal/novocliente';
import {ModalEC} from '../components/modal/modalEC'
import {useState} from 'react';
import * as db from '../components/bd/bd.js';
import { NativeModules } from "react-native";

const DATA = [];
//fazer requisicao pro banco com axios por cliente e popular com for loop
let data = db.getLastCliente();
//console.log(data[0].codigo);
var obj = [];
      let c = db.getLastCliente();
      let b = db.getClientes();
      let count = Object.keys(b).length;
      for(let i=1;i<=c[0].id;i++){
        let h = db.getEachClientes(i);
        if(h[0]!=undefined){
          obj.push({"codigo":i,"nome":h[0].nome});
        }
        //console.log(h[0].nome);
      }
for(let i=0;i<obj.length;i++){
  let a = db.getEachRoupas(i);
  //console.log(a[0]);
  DATA.push({id:`${obj[i].codigo}` ,title:`${obj[i].nome}`})
}

type ItemProps = {title:string};

export default function Index() {
  const [modalNovoCVisible, setModalNovoCVisible] = useState(false);
  const [modalECvisible, setModalECvisible] = useState(false);
  const [codigo, setCodigo] = useState("");
  const [nome, setNome] = useState("");
  function getCodigo({title}){
    let a = db.getEachClienteNome(title);
    console.log(a[0].id);
    setCodigo(a[0].id);
    console.log(codigo);
    setModalECvisible(true);
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
      <TouchableOpacity onPress={()=>NativeModules.DevSettings.reload()}>
        <Text>Recarregar</Text>
      </TouchableOpacity>
      <Modal visible={modalNovoCVisible} transparent={true}>
        <ModalNovoC handleClose={()=>setModalNovoCVisible(false)}/>
      </Modal>
      <Modal visible={modalECvisible} transparent={true}>
        <ModalEC handleClose={()=>setModalECvisible(false)} value={codigo}/>
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
