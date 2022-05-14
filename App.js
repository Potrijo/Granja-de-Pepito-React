import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, FlatList, Image } from 'react-native';
import { Audio } from 'expo-av';

const PintaPng = (props) => {

  return (
    <View style={styles.item}>
      <Image
        source={require(`./assets/${props.name}`)}
        style={{width: 200, height: 200}}

      />      


    </View>
  );
}
// comentario master branch
// Segundo comentario de master
const ANIMALS = [
  {name: 'Gallina', key:'1', image:<PintaPng name="gallina.jpg" />, audio:require('./assets/chickenCut.mp3') },
  {name: 'Gat', key:'2', image:<PintaPng name="Cat.jpg" />, audio: require("./assets/cattyCut.mp3") },
  {name: 'Gos', key:'3', image:<PintaPng name="dog.jpg" />, audio: require("./assets/dogBarkingCut.mp3")},
  {name: 'Cavall', key:'4', image:<PintaPng name="horse.jpg" />, audio: require("./assets/horseCut.mp3")},
  {name: 'Oca', key:'5', image:<PintaPng name="goose.jpg" />, audio: require("./assets/gooseCut.mp3")},
  {name: 'Gall', key:'6', image:<PintaPng name="rooster.jpg" />, audio: require("./assets/roosterCut.mp3")},
  {name: 'Bou', key:'7', image:<PintaPng name="bull.jpg" />, audio: require("./assets/bullCut.mp3")},
  {name: 'Vaca', key:'8', image:<PintaPng name="cow.webp" />, audio: require("./assets/cowCut.mp3")},
  {name: 'Cabra', key:'9', image:<PintaPng name="goat.jpg" />, audio: require("./assets/goatCut.mp3")},
  {name: 'Be', key:'10', image:<PintaPng name="lamb.jpg" />, audio: require("./assets/lambCut.mp3")},
]

export default function App() {
  const [sound, setSound] = React.useState();

  async function playSound(audio) {
    console.log(typeof(audio));
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
       audio
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync(); }



  return (
    <View style={styles.container}>
       
    <FlatList
      data={ANIMALS}
      //keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) =>
              <Text style={styles.item} onPress={()=>{playSound(item.audio)}} >{item.key} {item.name} {item.image} </Text>
                }
    />
  </View>
    /*<View style={styles.container}>
      <Button title="Play Sound" onPress={playSound} />
    </View>*/
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
   },
   item: {
    marginTop: 20,
    padding: 30,
    backgroundColor: '#ffc600',
    fontSize: 24
   }
});
