import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import {useState} from 'react';
import { Link } from "expo-router";
import axios from "axios";

export default function Index() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  return (
    <View
      style={style.screen}
    >
      <Image source={require('../components/images/logo.jpg')} style={style.image}></Image>
      <View style={style.textInput}>
        <TextInput style={style.inputText} value={user} onChangeText={setUser} placeholder="Email..." placeholderTextColor={'#FFF'}>
        </TextInput>
        </View>
        <View style={style.textInput}>
        <TextInput style={style.inputText} value={pass} onChangeText={setPass} placeholder="Senha..." placeholderTextColor={'#FFF'}>
        </TextInput>
      </View>
      <View>
        <TouchableOpacity style={style.button}>
        <Link style={style.buttText} href={'/logado'}>Entrar</Link>
        </TouchableOpacity>
        <Link style={{marginTop:10}} href={'/'}>Esqueceu sua Senha?</Link>
      </View>
      <View style={style.buttDown}>
      <TouchableOpacity style={style.button}>
        <Link style={style.buttText} href={'/cadastro'}>Criar nova conta</Link>
      </TouchableOpacity>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  screen:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'#FFF'
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
    marginBottom:20
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
    alignItems:'center',
    justifyContent:'center'
  },
  buttText:{
    fontSize:20,
    fontWeight:'bold'
  },
  buttDown:{
    marginTop:30
  }
})
