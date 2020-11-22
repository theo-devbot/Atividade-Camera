import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Contatos from './pages/contatos';
import toSpeech from './pages/TextToSpeech';
import Localizacao from './pages/localizacao';
import Cam from './pages/camera';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Contato" component={Contatos} />
        <Tab.Screen name="Falar" component={toSpeech} />
        <Tab.Screen name="Localização" component={Localizacao} />
        <Tab.Screen name="Camera" component={Cam} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;