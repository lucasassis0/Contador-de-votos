import React, { useState } from 'react';
import {Text, SafeAreaView, Button, View} from 'react-native'

function votos(){
  const [totalDeVotos, setVoto] = useState(0);

  return (
    <View>
      <Text>O total de votos é {totalDeVotos}!</Text>
      <Button onPress={()=>{setVoto(totalDeVotos + 1)}} title="Votar"/>
    </View>
  )
}

export default function votacao(){
  return (
    <SafeAreaView>
      {votos()}
    </SafeAreaView>
  )
}
