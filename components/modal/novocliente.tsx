import { View, Text, StyleSheet, Button, TouchableOpacity, FlatList, TextInput } from 'react-native';
import{useState} from 'react';
import axios from 'axios';
export function ModalNovoC({handleClose}) {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const postFunc = async()=>{
    const body = JSON.stringify({nome:nome, cpf:cpf});

    axios.post('http://192.168.0.103:8080/ncliente',body,{
      "headers":{
        'Content-Type':'application/json'
      }
    }).then(function(response){
      console.log(response);
    }).catch(function(error){console.log(error);});
  }
  return (
    <View style={styles.screen}>
        <View style={styles.content}>
        <Button title='X' onPress={handleClose} color={"#fb924e"}></Button>
        <View style={styles.textInput}>
        <TextInput style={styles.inputText} value={nome} onChangeText={setNome} placeholder="Nome..." placeholderTextColor={'#FFF'}>
        </TextInput>
      </View>
      <View style={styles.textInput}>
        <TextInput style={styles.inputText} value={cpf} onChangeText={setCpf} placeholder="CPF..." placeholderTextColor={'#FFF'}>
        </TextInput>
      </View>
      <TouchableOpacity style={styles.button} onPress={postFunc}>
        <Text style={styles.buttText}>Adicionar Cliente</Text>
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