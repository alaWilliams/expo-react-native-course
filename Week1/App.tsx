import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import HelloWorld from './components/HelloWorld';
import Greeter from './components/Greeter';
import InputGreeter from './components/InputGreeter';
import Flexbox from './components/Flexbox';
import DisplayAnImage from './components/DisplayAnImage';
// import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState } from 'react'


export default function App() {
  const neutral = require('./assets/neutral.png')
  const happy = require('./assets/happy.png')
  const sad = require('./assets/sad.png')


  const [name, setName] = useState('');
  const [inputName, setInputName] = useState('')
  const [mood, setMood]= useState<'neutral' | 'happy' | 'sad'>('neutral')

  const imageSource = mood === 'neutral' ? neutral
                    : mood === 'happy' ? happy
                    : sad;

  const setTemporaryMood = (newMood: 'happy' | 'sad') => {
    setMood(newMood);
    const durationMs = (Math.random() * 8 + 2) * 1000;
    setTimeout(() => {
      setMood('neutral');
    }, durationMs);
  };

return (
  <View style={styles.container}>
    {name === '' ? (
      <>
        <Text>Please enter your dog's name</Text>

        <TextInput
          placeholder="Insert the name here"
          value={inputName}
          onChangeText={setInputName}
        />

        <Button
          title="Set the name"
          onPress={() => setName(inputName)}
        />
      </>
    ) : (
      <> 
        <Text style={{fontWeight:'bold', fontSize: 25}}>{name} is { mood }</Text>
        <Image source= { imageSource } style={{ width: 200, height: 400 }}
></Image>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width:'100%', padding: 20}}>
        <Button title="Sad" onPress={()=>setTemporaryMood('sad')}></Button>
        <Button title="Neutral" onPress={()=>setMood('neutral')}></Button>
        <Button title="Happy" onPress={()=>setTemporaryMood('happy')}></Button>
      </View>
     
      </>
      
    )}

    <StatusBar style="auto" />
  </View>
);

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bababaff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
