import { Text, View, StyleSheet, TouchableOpacity, FlatList, SafeAreaView, TextInput} from "react-native";
import { NavigationContainer } from '@react-navigation/native'
import { Link } from "expo-router";

const DATA = [];
//fazer requisicao pro banco com axios por cliente e popular com for loop
for(let i=0;i<15;i++){
  DATA.push({id:`${i}`,title:`Venda ${i}`})
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
        <Text style={{marginTop:10}}>Vendas Nao Pagas</Text>
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
