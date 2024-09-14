import { View, Text, StyleSheet, Button, TouchableOpacity, FlatList, TextInput } from 'react-native';
import {useState} from 'react';
export function ModalEC({handleClose}) {


  return (
    <View style={styles.screen}>
        <View style={styles.content}>
        <Button title='X' onPress={handleClose} color={"#fb924e"}></Button>
        <View style={styles.textInput}>
        <TextInput style={styles.inputText} placeholder="Nome ATUAL" placeholderTextColor={'#FFF'}>
        </TextInput>
      </View>
      <View style={styles.textInput}>
        <TextInput style={styles.inputText} placeholder="CPF ATUAL" placeholderTextColor={'#FFF'}>
        </TextInput>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttText}>Editar Cliente</Text>
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