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

const COLORS1 = [
  {name: 'Gallina', key:'1', image:<PintaPng name="purple.png" />, audio:require('./assets/sound00.wav') },
  {name: 'Gat', key:'2', image:<PintaPng name="red.png" />, audio: require("./assets/sound5.wav") },
  {name: 'Gos', key:'3', image:<PintaPng name="green.png" />, audio: require("./assets/sound6.wav")},

]

const COLORS2 = [
  {name: 'Gallina', key:'1', image:<PintaPng name="yellow.png" />, audio:require('./assets/sound3.wav') },
  {name: 'Gat', key:'2', image:<PintaPng name="red.png" />, audio: require("./assets/sound4.wav") },
  {name: 'Gos', key:'3', image:<PintaPng name="green.png" />, audio: require("./assets/sound5.wav")},

]
// es como el main en java 
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
      data={COLORS1}
      //keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) =>
              <Text style={styles.container} onPress={()=>{playSound(item.audio)}} >{item.image} </Text>
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
    backgroundColor: 'black',
    paddingTop: 40,
    paddingHorizontal: 20
   },
   item: {
    marginTop: 20,
    padding: 30,
    backgroundColor: '#black',
    fontSize: 24
   }
});
