import { View, Text, StyleSheet, Button, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const DATA = [
  {
    id: '1',
    title: 'Roupa A',
  },
  {
    id: '2',
    title: 'Roupa B',
  },
  {
    id: '3',
    title: 'Roupa C',
  },
  {
    id: '4',
    title: 'Roupa D'
  },
  {
    id: '5',
    title: 'Roupa E'
  },
  {
    id: '6',
    title: 'Roupa F',
  },
  {
    id: '7',
    title: 'Roupa G',
  },
  {
    id: '8',
    title: 'Roupa H',
  },
  {
    id: '9',
    title: 'Roupa I'
  },
  {
    id: '10',
    title: 'Roupa J'
  },
  {
    id: '11',
    title: 'Roupa K',
  },
  {
    id: '12',
    title: 'Roupa L',
  },
  {
    id: '13',
    title: 'Roupa M',
  },
  {
    id: '14',
    title: 'Roupa N'
  },
  {
    id: '15',
    title: 'Roupa O'
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
export function ModalR({handleClose}) {
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