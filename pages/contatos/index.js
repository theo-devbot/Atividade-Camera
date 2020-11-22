import React, {useEffect, useState} from 'react'
import {StyleSheet,View, Text, StatusBar, FlatList} from 'react-native'
import * as Contacts from 'expo-contacts';

const Contatos = () => {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            marginTop: StatusBar.currentHeight || 0,
        },
        item: {
            backgroundColor: '#f92ff',
            padding: 20,
            marginVertical: 8,
            marginHorizontal: 16,
        },
        nome: {
            fontSize: 32,
        },
    });
    const item = () => {
        return(
            <View style={styles.item}>
                <text style={styles.nome}>{nome}</text>
            </View>
        )
    }

    const [contatos, setContatos] = useState([])
    useEffect(() => {
        (async () => {
          const { status } = await Contacts.requestPermissionsAsync();
          if (status === 'granted') {
            const { data } = await Contacts.getContactsAsync({
              fields: [Contacts.Fields.Emails],
            });
    
            if (data.length > 0) {
                setContatos(data)
              const contact = data[0];
              alert(JSON.stringify(contact))
            }
          }
        })();
      }, []);

      const renderItem = ({item}) => {
        <Item nome={item.firstName} />
      }
    return(
        
        <View Style={styles.container}>
            <Text>Contatos</Text>
            <FlatList
                data={contatos}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default Contatos;