import { Text, View, StyleSheet, TouchableOpacity} from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={style.screen}
    >
      <View>
        <TouchableOpacity style={style.button}>
        <Link style={style.buttText} href={'/cliente'}>Selecionar cliente</Link>
        </TouchableOpacity>
        <Text style={style.text}>CLIENTE A</Text>
        <TouchableOpacity style={style.button}>
        <Link style={style.buttText} href={'/estoque'}>Selecionar roupa</Link>
        </TouchableOpacity>
        <Text style={style.text}>ROUPA A</Text>
        <TouchableOpacity style={style.button}>
        <Link style={style.buttText} href={'/pagamento'}>Forma de pagamento</Link>
        </TouchableOpacity>
        <Text style={style.text}>DINHEIRO</Text>
        <TouchableOpacity style={style.buttonRecibo}>
        <Link style={style.buttText} href={'/'}>Gerar recibo</Link>
        </TouchableOpacity>
        <Link style={{marginTop:"20%", alignSelf:'center'}} href={'/logado'}>voltar</Link>
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
  buttonRecibo:{
    backgroundColor:'#fb924e',
    borderRadius:20,
    padding:15,
    marginTop:"80%",
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
  },
  text:{
    alignSelf:'center',
    marginTop:10
  }
})
