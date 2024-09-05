import { Text, View, StyleSheet, TouchableOpacity} from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={style.screen}
    >
      <View>
        <TouchableOpacity style={style.button}>
        <Link style={style.buttText} href={'/'}>Cartao</Link>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
        <Link style={style.buttText} href={'/'}>Pix</Link>
        </TouchableOpacity>
        <TouchableOpacity style={style.button}>
        <Link style={style.buttText} href={'/'}>Dinheiro</Link>
        </TouchableOpacity>
        <Link style={{marginTop:"120%", alignSelf:'center'}} href={'/'}>voltar</Link>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  screen:{
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'#FFF'
  }
  ,
  button:{
    backgroundColor:'#fb924e',
    borderRadius:20,
    padding:15,
    marginTop:30,
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
