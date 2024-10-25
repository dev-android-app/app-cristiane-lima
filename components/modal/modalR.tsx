import { View, Text, StyleSheet, Button, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as db from '../bd/bd.js';
const DATA = [];
var obj = [];
      let c = db.getLastRoupa();
      let b = db.getRoupas();
      let count = Object.keys(b).length;
      for(let i=1;i<=c[0].codigo;i++){
        let h = db.getEachRoupas(i);
        if(h[0]!=undefined){
          obj.push({"codigo":i,"nome":h[0].nome});
        }
        //console.log(h[0].nome);
      }
      console.log(obj);
for(let i=0;i<obj.length;i++){
  let a = db.getEachRoupas(i);
  //console.log(a[0]);
  DATA.push({id:`${obj[i].codigo}` ,title:`${obj[i].nome}`})
}

type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
  <View>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttText}>{title}</Text>
    </TouchableOpacity>
  </View>
);
export function ModalR({handleClose}) {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.content}>
        <Button title='X' color="#fb924e" onPress={handleClose}/>
        <View style={styles.gencont}>

          <View style={styles.textInput}>
            <TextInput style={styles.inputText} placeholder="Pesquisar roupa..." placeholderTextColor={'#FFF'}>
            </TextInput>
          </View>
        
          <FlatList data={DATA}
            renderItem={({ item }) => <Item title={item.title} />}
            keyExtractor={item => item.id} contentContainerStyle={{flexGrow:1}} />
        </View>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'rgba(24, 24, 24, 0.6)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    backgroundColor: '#FFF',
    height: '80%',
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
  },
  buttText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  textInput: {
    borderWidth: 1,
    width: '60%',
    height: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    backgroundColor: '#646688',
    marginBottom: 20,
    marginTop: 50
  },
  inputText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFF',
  }
})