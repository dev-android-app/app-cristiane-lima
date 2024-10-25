import { View, Text, StyleSheet, Button, TouchableOpacity, FlatList, TextInput } from 'react-native';
import {useState} from 'react';
import { NativeModules } from "react-native";
import * as db from '../bd/bd.js';
export function ModalEC({handleClose, value}) {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  function carregarInfos(){
    let a = db.getEachClientes(value);
    //console.log(a[0]);
    setNome(a[0].nome);
    setCpf(a[0].cpf);
    //console.log(nome);
  }
  function deleteCliente(){
    let a = db.getEachClientes(value);
    //alterar codigos pra -1 cada
    db.delCliente(a[0].nome);
    var obj = [];
    let c = db.getLastCliente();
    let b = db.getClientes();
    let count = Object.keys(b).length;
    for(let i=1;i<=c[0].codigo;i++){
      let h = db.getEachClientes(i);
      //console.log(h[0].nome);
      obj.push({"codigo":i,"nome":h[0].nome});
    }
    console.log(obj[0].nome);
    for(let i=0;i<count-1;i++){
      //func mudar codigo
      db.altCodiCliente(i+1, obj[i].nome);
    }
    //let g = db.getRoupas();
    //console.log(g[0]);
    NativeModules.DevSettings.reload();
  }
  function altCliente(){
    let a = db.getEachClientes(value);

    db.altCliente(nome, cpf, a[0].id);

    NativeModules.DevSettings.reload();
  }

  return (
    <View style={styles.screen}>
        <View style={styles.content}>
        <Button title='X' onPress={handleClose} color={"#fb924e"}></Button>
        <View style={styles.textInput}>
        <TextInput style={styles.inputText} value={nome} onChangeText={setNome} placeholder="Nome ATUAL" placeholderTextColor={'#FFF'}>
        </TextInput>
      </View>
      <View style={styles.textInput}>
        <TextInput style={styles.inputText} value={cpf} onChangeText={setCpf} placeholder="CPF ATUAL" placeholderTextColor={'#FFF'}>
        </TextInput>
      </View>
      <TouchableOpacity style={styles.button} onPress={()=>altCliente()}>
        <Text style={styles.buttText}>Alterar Cliente</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>deleteCliente()}>
        <Text style={styles.buttText}>Deletar Cliente</Text>
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
    height: '13%',
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