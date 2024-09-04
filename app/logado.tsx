import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image} from "react-native";
import { NavigationContainer } from '@react-navigation/native'
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={style.screen}
    >
        <Image source={require('../components/images/logo.jpg')} style={style.image}></Image>
      <View>
        <TouchableOpacity style={style.button}>
        <Link style={style.buttText} href={'/'}>Nova venda</Link>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
        <Link style={style.buttText} href={'/'}>Vendas</Link>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
        <Link style={style.buttText} href={'/'}>Estoque</Link>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
        <Link style={style.buttText} href={'/cliente'}>Clientes</Link>
        </TouchableOpacity>
        <Link style={{marginTop:10, alignSelf:'center'}} href={'/'}>Logout</Link>
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
