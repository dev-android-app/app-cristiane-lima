import { Text, View, StyleSheet, TouchableOpacity, FlatList, SafeAreaView, TextInput, Modal} from "react-native";
import { ModalNovaR } from '../components/modal/novaroupa'
import { useState } from 'react'
import { Link } from "expo-router";
const DATA = [];
//fazer requisicao pro banco com axios por cliente e popular com for loop
for(let i=0;i<15;i++){
  DATA.push({id:`${i}`,title:`Roupa ${i}`})
}

type ItemProps = {title:string};

const Item = ({title}: ItemProps) =>(
  <View>
    <TouchableOpacity style={style.button}>
        <Link style={style.buttText} href={'/'}>{title}</Link>
        </TouchableOpacity>
  </View>
)

export default function Index() {
const [modalVis, setModalVis] = useState(false);
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
