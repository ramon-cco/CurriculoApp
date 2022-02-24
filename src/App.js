import React from 'react';
import {StyleSheet, View, Image, Text, bold, Alert, TouchableOpacity} from 'react-native';
import foto from './assets/fotoPerfil.jpg';
import Icon from 'react-native-vector-icons/Feather';

import Card from './components/Card'

const App = () => {

  function handleRedeSocial(redes_social){

    switch(redes_social){
      case 'linkedin':
        Alert.alert('Meu Linkdin','https://www.linkedin.com/in/ramoncco/')
        break
        case 'github':
        Alert.alert('Meu Github','https://github.com/ramon-cco')
        break
    }
  }

  return (
    <>
      <View style={style.page}>
        <View style={style.container_cabecalho}>
          <Image source={foto} style={style.foto} />
          <Text style={style.nome}>RAMON OLIVEIRA</Text>
          <Text style={style.funcao}>Dev Mobile</Text>
          <View style={style.redes_sociais}> 
            <TouchableOpacity onPress={()=> handleRedeSocial('github')}>
              <Icon name="github" size={30}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> handleRedeSocial('linkedin')}>
              <Icon name="linkedin" size={30}/>
            </TouchableOpacity>
          </View>
        </View>

        <Card  title='Experiencias Profissionais:'> 
            <Text style={style.card_content_text}>Analista de sistemas no Exército Brasileiro (Oficial);</Text>
            <Text style={style.card_content_text}>DevOps Exército Brasileiro (3 º Sargento);</Text>
            <Text style={style.card_content_text}>Web designer Instituto Brasília de Tecnologia e Inovação - IBTI</Text>
        </Card > 
        <Card  title='Formação Academica:'>
            <Text style={style.card_content_text}>Tecnólogo em Análise e Desenvolvimento de Sistemas;</Text>
            <Text style={style.card_content_text}>Bacharel em Sistemas de Informação</Text>
            <Text style={style.card_content_text}>MBA em Sistemas de Informação</Text>
        </Card>
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
    },
    card_content_text: {
      color: '#939393',
      marginBottom: 10,
      textAlign: 'center'
    },

});

export default App;
