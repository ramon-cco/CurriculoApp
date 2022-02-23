import React from 'react';
import {StyleSheet, View, Image, Text, bold} from 'react-native';
import foto from './assets/fotoPerfil.jpg';
import Icon from 'react-native-vector-icons/Feather';


const App = () => {
  return (
    <>
      <View style={style.page}>
        <View style={style.container_cabecalho}>
          <Image source={foto} style={style.foto} />
          <Text style={style.nome}>RAMON OLIVEIRA</Text>
          <Text style={style.funcao}>Dev Mobile</Text>
          <View style={style.redes_sociais}> 
            <Icon name="github" size={30}/>
            <Icon name="linkedin" size={30}/>
          </View>
        </View>
      </View>
  </>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
  },
  container_cabecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60
  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  nome: {
      fontSize: 26,
      fontWeight: bold,
      marginTop: 10
    },
    funcao: {
      color: '#939393',
      marginBottom: 10
    },
    redes_sociais: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '30%',
      marginTop: 20,
    }
})

export default App;
