import { Text, View, StyleSheet, TouchableOpacity, FlatList, SafeAreaView, TextInput} from "react-native";
import { NavigationContainer } from '@react-navigation/native'
import { Link } from "expo-router";
import * as db from '../components/bd/bd.js';
import { NativeModules } from "react-native";


const DATA = [];
//fazer requisicao pro banco com axios por cliente e popular com for loop
let data = db.getLastVenda();
//console.log(data[0].codigo);
var obj = [];
      let c = db.getLastVenda();
      let b = db.getVendas();
      let count = Object.keys(b).length;
      for(let i=1;i<=c[0].transc;i++){
        let h = db.getEachVendasPagas(i);
        if(h[0]!=undefined){
          obj.push({"transc":i,"clientecpf":h[0].transc});
        }
        //console.log(h[0].nome);
      }
      console.log(obj);
for(let i=0;i<obj.length;i++){
  let a = db.getEachVendasPagas(i);
  //console.log(a[0]);
  DATA.push({id:`${obj[i].transc}` ,title:`${obj[i].clientecpf}`})
}

type ItemProps = {title:string};

const Item = ({title}: ItemProps) =>(
  <View>
    <TouchableOpacity style={style.button}>
        <Link style={style.buttText} href={'/'}>{title}</Link>
        </TouchableOpacity>
  </View>
)

export default function Index() {
  return (

    
    <SafeAreaView style={style.screen}>
        <Text style={{marginTop:10}}>Vendas Pagas</Text>
      <View style={style.textInput}>
        <TextInput style={style.inputText} placeholder="Pesquisar venda..." placeholderTextColor={'#FFF'}>
        </TextInput>
      </View>
      <FlatList
      data={DATA}
      renderItem={({item}) => <Item title={item.title}/>}
      keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  screen:{
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'#FFF',
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
    marginBottom:20,
    marginTop:50
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
    marginTop:10,
    width:250,
    justifyContent:'center',
    alignItems:'center',
  },
  buttText:{
    fontSize:20,
    fontWeight:'bold'
  },
})
