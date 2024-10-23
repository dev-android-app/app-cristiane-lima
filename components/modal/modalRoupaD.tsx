import { View, Text, StyleSheet, Button, TouchableOpacity, FlatList, TextInput } from 'react-native';
import{useState} from 'react';
import * as db from '../bd/bd.js'
import { NativeModules } from "react-native";
export function ModalRoupaD({handleClose, value}) {
  const [nome, setNome] = useState("");
  //const delete
    let a = db.getEachRoupas(value);
    console.log(a[0]);
    console.log(nome);
    function carregarInfos(){
      let a = db.getEachRoupas(value);
      console.log(a[0]);
      setNome(a[0].nome);
      console.log(nome);
    }
    function deleteRoupa(){
      let a = db.getEachRoupas(value);
      //alterar codigos pra -1 cada
      db.delRoupa(a[0].nome);
      var obj = [];
      let c = db.getLastRoupa();
      let b = db.getRoupas();
      let count = Object.keys(b).length -1;
      for(let i=1;i<=c[0].codigo;i++){
        let h = db.getEachRoupas(i);
        console.log(h[0].nome);
        obj.push({"codigo":i,"nome":h[0].nome});
      }
      console.log(obj[2].nome);
      for(let i=0;i<count;i++){
        //func mudar codigo
        db.altCodiRoupa(i+1, obj[i].nome);
      }
      let g = db.getRoupas();
      console.log(g[0]);
      //NativeModules.DevSettings.reload();
    }
    function altRoupa(){
      let a = db.getEachRoupas(value);

      db.altRoupa(nome, a[0].codigo);

      let b = db.getEachRoupas(value);
      console.log(b[0]);
    }
  
  
 // console.log(a[0]);

  return (
    <View style={styles.screen}>
        <View style={styles.content}>
        <Button title='X' onPress={handleClose} color={"#fb924e"}></Button>
        <View style={styles.textInput}>
        <TextInput style={styles.inputText} value={nome} onChangeText={()=>setNome()} placeholder={nome} placeholderTextColor={'#FFF'}>
        </TextInput>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttText}>Alterar Roupa</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>deleteRoupa()}>
        <Text style={styles.buttText}>Deletar Roupa</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>carregarInfos()}>
          <Text>carregar   </Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'rgba(24, 24, 24, 0.6)',
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  },
  content: {
    backgroundColor: '#FFF',
    height: '50%',
    width: '80%',
    alignItems: 'flex-end'
  },
  gencont: {
    alignSelf: 'center',
    flex:1,
  },
  button: {
    backgroundColor: '#fb924e',
    borderRadius: 20,
    padding: 15,
    marginTop: 10,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center'
  },
  buttText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  textInput: {
    borderWidth: 1,
    width: '80%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    borderRadius: 18,
    backgroundColor: '#646688',
    marginTop: 15,
    marginBottom:15
  },
  inputText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFF',
  }
})