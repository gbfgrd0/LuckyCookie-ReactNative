import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert} from  'react-native';

function App(){
  // Variaveis do sistema

  const frases = [
    "Não ser amado é falta de sorte, mas não amar é a própria infelicidade.", 
    "Não se pode criar experiência. É preciso passar por ela.",
    "Toda a infelicidade dos homens nasce da esperança.",
    "A imaginação oferece às pessoas consolação por aquilo que não podem ser e humor por aquilo que efectivamente são.",
    "Não há fatos eternos, como não há verdades absolutas.",
    "Aquilo que se faz por amor está sempre além do bem e do mal.",
    "Torna-te aquilo que és.",
    "Quem comete uma injustiça é sempre mais infeliz que o injustiçado",
    "Uma vida não questionada não merece ser vivida",
    "Que desgraça é para o homem envelhecer sem nunca ver a beleza e a força do que o seu corpo é capaz.",
    "Ideias e somente ideias podem iluminar a escuridão",
    "Cada sonho que você deixa pra trás, é um pedaço do seu futuro que deixa de existir",
    "O universo não foi feito à medida do ser humano, mas tampouco lhe é adverso: é-lhe indiferente",
    "Diante da vastidão do tempo e da imensidão do universo, é um imenso prazer para mim dividir um planeta e uma época com você"
  ];
  let [clickado, setClickado] = useState(require('./imagens/biscoito.png')); // Estado de mudança para imagem
  let [frase, setFrase] = useState('Frase'); // Estado de mudança das frases


  // Funções 
  function Click(){
    setClickado(require('./imagens/biscoitoAberto.png'))
    let num = Math.floor(Math.random() * frases.length)
    setFrase(`"${frases[num]}"`)
  } // Para mudar a imagem para o biscoito quebrado e nudar a frase
  
  function Resetar(){
    setClickado(require('./imagens/biscoito.png'))
    setFrase('')
  } // Para resetar a imagem e frase

  //  Interface 
  return(
  <View style={style.container}>
    <Image style={style.img} source={clickado}/>
    <Text style={style.frase}>{frase}</Text>
    <TouchableOpacity onPress={Click}>
      <View style={style.botao}>
      <Text style={style.texto}>Quebrar Biscoito</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={Resetar}>
      <View style={[style.botao, {borderColor: 'blue'}]}>
      <Text style={[style.texto, {color: 'blue'}]}>Resetar Biscoito</Text>
      </View>
    </TouchableOpacity>
  </View>
)}
    // Estilo da interface
const style = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img:{
    height: 250,
    width: 250,
  },
  botao:{
    backgroundColor: 'white',
    borderWidth: 3,
    borderRadius: 10,
    borderColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  texto:{
    color: 'orange',
    fontSize: 24,
    margin: 15,
    fontWeight: 700
  },
  frase:{
    color: 'orange',
    width: 300, 
    fontSize: 20,
    marginTop: 20,
    marginBottom: 5,
    fontWeight: 600,
  }
})

export default App;