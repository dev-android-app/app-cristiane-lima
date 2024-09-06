import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image} from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={style.screen}
    >
        <Image source={require('../components/images/logo.jpg')} style={style.image}></Image>
      <View>
        <TouchableOpacity style={style.button}>
        <Link style={style.buttText} href={'/controlevpagas'}>Pagas</Link>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
        <Link style={style.buttText} href={'/controlevnpagas'}>Nao pagas</Link>
        </TouchableOpacity>
        <Link style={{marginTop:10, alignSelf:'center'}} href={'/logado'}>Voltar</Link>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  screen:{
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'#FFF'
  },
  image:{
    height:'50%',
    width:'50%',
    resizeMode:'contain'
  }
  ,
  button:{
    backgroundColor:'#fb924e',
    borderRadius:20,
    padding:15,
    marginBottom:10,
    width:250,
    justifyContent:'center',
    alignItems:'center',
  },
  buttText:{
    fontSize:20,
    fontWeight:'bold'
  },
  buttDown:{
    marginTop:30
  }
})
