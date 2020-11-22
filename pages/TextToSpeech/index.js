import React, {useState} from 'react';
import { Text, View, StyleSheet, Button, StatusBar, TextInput } from 'react-native';
import * as Speech from 'expo-speech';

const toSpeech = () => {

    const [text, setText] = useState('')

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            marginTop: StatusBar.currentHeight || 0,
        },
        input: {
            width: "90%",
            height: 40,
            borderColor: "blue",
            borderWidth: 1,
            marginTop: 20,
            padding: 5,
            borderRadius: 6,
            marginLeft: '5%'
        }
    })

    // const speak = () => {
    //     let textSpeech = "salve caraio";
    //     Speech.speak(textSpeech);
    // }

    return(
        <View>
            <Text style={styles.container}>Text to speech</Text>
            <TextInput value={text} onChangeText={x => setText(x)} style={styles.input} />
            <Button title="Clique para falar" onPress={() => Speech.speak(text)} />
        </View>
    )
}

export default toSpeech