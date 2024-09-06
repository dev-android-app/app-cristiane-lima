import { Text, View, StyleSheet, TouchableOpacity, Modal} from "react-native";
import {useState} from 'react';
import { Link } from "expo-router";
import { ModalC } from "../components/modal/index";
import { ModalR } from "../components/modal/modalR"

export default function Index() {
  const [modalCVisible, setModalCVisible] = useState(false);
  const [modalRVisible, setModalRVisible] = useState(false);
  return (
    <View
      style={style.screen}
    >
      <View>
        <TouchableOpacity style={style.button} onPress={()=>setModalCVisible(true)}>
        <Text style={style.buttText}>Selecionar Cliente</Text>
        </TouchableOpacity>
        <Text style={style.text}>CLIENTE A</Text>
        <TouchableOpacity style={style.button} onPress={()=>setModalRVisible(true)}>
        <Text style={style.buttText}>Selecionar Roupa</Text>
        </TouchableOpacity>
        <Text style={style.text}>ROUPA A</Text>
        <TouchableOpacity style={style.button}>
        <Link style={style.buttText} href={'/pagamento'}>Forma de pagamento</Link>
        </TouchableOpacity>
        <Text style={style.text}>DINHEIRO</Text>
        <TouchableOpacity style={style.buttonRecibo}>
        <Link style={style.buttText} href={'/logado'}>Gerar recibo</Link>
        </TouchableOpacity>
        <Link style={{marginTop:"20%", alignSelf:'center'}} href={'/logado'}>voltar</Link>
      </View>
      <Modal visible={modalCVisible} animationType='fade'>
        <ModalC handleClose={()=>setModalCVisible(false)}/>
      </Modal>
      <Modal visible={modalRVisible} animationType='fade'>
        <ModalR handleClose={()=>setModalRVisible(false)}/>
      </Modal>
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
