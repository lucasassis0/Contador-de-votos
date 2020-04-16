import React from 'react';
import { Text, View, Button } from 'react-native';

class votos extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      c1: 0,
      c2: 0      
    } 
  }

  render(){
    return(
      <View>
        <Text>Eleições 2020</Text>
        <Text>Candidato A: {this.state.c1}</Text>
        <Button onPress={()=>{this.setState({c1: this.state.c1 + 1})}} title="Votar"></Button>
        <Text>Candidato B: {this.state.c2}</Text>
        <Button onPress={()=>{this.setState({c2: this.state.c2 + 1})}} title="Votar"></Button>
      </View>
    )
  }
}

export default votos;