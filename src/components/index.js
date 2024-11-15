import React from "react";
import {StyleSheet, View, Text, Image } from "react-native";

export default function Teste() {
    return (
      <View style={style.container}>
        <Text style={style.texto}>Olha pra mim!! ass: Melhor aluno do Diego...</Text>
        <Image
          source={{ uri: 'https://ascenty.com/wp-content/uploads/2022/04/tecnologia-na-educa%C3%A7%C3%A3o-1920x1000-c-default.png' }}
          style={style.image}
        />
      </View> 
    );
  }

  const style = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    texto: {
      backgroundColor: '#c4c452', // cor das letras
      fontSize: 18, // tamanho das letras
    },

    image: {
      width: 200,   // Largura da imagem
      height: 200,  // Altura da imagem
      marginTop: 20, // Espaçamento entre o texto e a imagem
      resizeMode: 'contain'
    },
  })