import { View, Text, StyleSheet, Button, TouchableOpacity, FlatList, TextInput } from 'react-native';
import{useState} from 'react';
import * as db from '../bd/bd.js'
export function ModalRoupaD({handleClose},val) {
  const [nome, setNome] = useState("");
  const [custo, setCusto] = useState("");
  const [qntd, setQntd] = useState("");
  //const delete
  let a = db.getEachRoupas(val);
  console.log(val);
 // console.log(a[0]);

  return (
    <View style={styles.screen}>
        <View style={styles.content}>
        <Button title='X' onPress={handleClose} color={"#fb924e"}></Button>
        <View style={styles.textInput}>
        <TextInput style={styles.inputText} value={nome} onChangeText={setNome} placeholder={nome} placeholderTextColor={'#FFF'}>
        </TextInput>
      </View>
      <View style={styles.textInput}>
        <TextInput style={styles.inputText} value={custo} onChangeText={setCusto} placeholder={custo} placeholderTextColor={'#FFF'}>
        </TextInput>
      </View>
      <View style={styles.textInput}>
        <TextInput style={styles.inputText} value={qntd} onChangeText={setQntd} placeholder={qntd} placeholderTextColor={'#FFF'}>
        </TextInput>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttText}>Alterar Roupa</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttText}>Deletar Roupa</Text>
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