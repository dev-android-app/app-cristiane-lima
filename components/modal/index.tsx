import { View, Text, StyleSheet, Button, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const DATA = [
  {
    id: '1',
    title: 'Cliente A',
  },
  {
    id: '2',
    title: 'Cliente B',
  },
  {
    id: '3',
    title: 'Cliente C',
  },
  {
    id: '4',
    title: 'Cliente D'
  },
  {
    id: '5',
    title: 'Cliente E'
  },
  {
    id: '6',
    title: 'Cliente F',
  },
  {
    id: '7',
    title: 'Cliente G',
  },
  {
    id: '8',
    title: 'Cliente H',
  },
  {
    id: '9',
    title: 'Cliente I'
  },
  {
    id: '10',
    title: 'Cliente J'
  },
  {
    id: '11',
    title: 'Cliente K',
  },
  {
    id: '12',
    title: 'Cliente L',
  },
  {
    id: '13',
    title: 'Cliente M',
  },
  {
    id: '14',
    title: 'Cliente N'
  },
  {
    id: '15',
    title: 'Cliente O'
  }
];

type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
  <View>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttText}>{title}</Text>
    </TouchableOpacity>
  </View>
);
export function ModalC({handleClose}) {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.content}>
        <Button title='X' color="#fb924e" onPress={handleClose}/>
        <View style={styles.gencont}>

          <View style={styles.textInput}>
            <TextInput style={styles.inputText} placeholder="Pesquisar venda..." placeholderTextColor={'#FFF'}>
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