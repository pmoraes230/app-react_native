import React from "react";
import { View, Text } from "react-native";

export default function title() {
    return (
      <View style={styles.container}>
        <Text>Olha pra mim!! ass: Melhor aluno do Diego.</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  