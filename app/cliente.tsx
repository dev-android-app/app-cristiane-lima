import { Text, View, StyleSheet, TouchableOpacity, FlatList, Modal, SafeAreaView, TextInput} from "react-native";
import {ModalNovoC} from '../components/modal/novocliente';
import {ModalEC} from '../components/modal/modalEC'
import {useState} from 'react';

const DATA = [];
//fazer requisicao pro banco com axios por cliente e popular com for loop
for(let i=0;i<15;i++){
  DATA.push({id:`${i}`,title:`Cliente ${i}`})
}

type ItemProps = {title:string};

export default function Index() {
  const [modalNovoCVisible, setModalNovoCVisible] = useState(false);
  const [modalECvisible, setModalECvisible] = useState(false);

  const [nome, setNome] = useState("");
  const Item = ({title}: ItemProps) =>(
    <View>
      <TouchableOpacity style={style.button} onPress={()=>setModalECvisible(true)}>
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
      <Modal visible={modalNovoCVisible} transparent={true}>
        <ModalNovoC handleClose={()=>setModalNovoCVisible(false)}/>
      </Modal>
      <Modal visible={modalECvisible} transparent={true}>
        <ModalEC handleClose={()=>setModalECvisible(false)}/>
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
