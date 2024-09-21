import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image} from "react-native";
import { Link } from "expo-router";
import {useState} from 'react';
import axios from "axios";

export default function Index() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const postFunc = async()=>{
    const body = JSON.stringify({user:user, email:email, pass:pass});

    axios.post('http://192.168.242.71:8080/post',body,{
      "headers":{
        'Content-Type':'application/json'
      }
    }).then(function(response){
      console.log(response);
    }).catch(function(error){console.log(error);});
  }
  return (
    <View
      style={style.screen}
    >
        <View style={style.offset}>
        <Text style={style.titletext}>Usuario:</Text>
        </View>
        <View style={style.textInput}>
        <TextInput value={user} style={style.inputText} onChangeText={setUser}>
        </TextInput>
        </View>
        <View style={style.offset}>
        <Text style={style.titletext}>Email:</Text>
        </View>
        <View style={style.textInput}>
        <TextInput value={email} onChangeText={setEmail} style={style.inputText}>
        </TextInput>
        </View>
        <View style={style.offset}>
        <Text style={style.titletext}>Senha:</Text>
        </View>
      <View style={style.textInput}>
        <TextInput value={pass} onChangeText={setPass} style={style.inputText}>
        </TextInput>
        </View>
        <View style={style.offset}>
        <Text style={style.titletext}>Senha novamente:</Text>
        </View>
        <View style={style.textInput}>
        <TextInput style={style.inputText}>
        </TextInput>
      </View>
      <TouchableOpacity onPress={postFunc} style={style.button}>
          <Text style={style.buttText}>Registrar</Text>
        </TouchableOpacity>
        <Link style={{marginTop:10}} href={'/'}>Voltar</Link>
      
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
  textInput:{
    borderWidth:1,
    width:'80%',
    height:'6%',
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
    alignSelf:'baseline',
    marginLeft:10,
  }
  ,
  button:{
    backgroundColor:'#fb924e',
    borderRadius:20,
    width:'80%',
    padding:15,
    alignItems:'center',
    marginTop:15,
    justifyContent:'center'
  },
  buttText:{
    fontSize:20,
    fontWeight:'bold'
  },
  titletext:{
    fontWeight:'bold',
    fontSize:20,
    marginBottom:10,
  },
  offset:{
    alignSelf:'baseline',
    marginLeft:50,
  }
})
