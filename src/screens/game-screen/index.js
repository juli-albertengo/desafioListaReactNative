import React, { useState } from 'react';
import { ScrollView, TouchableWithoutFeedback, Keyboard, View, Text, Button} from 'react-native';

//import { colors } from '../../constants/theme';
import Header from '../../components/header';

import { styles } from './styles';

const GameScreen = ({userChoice, gameStatus}) => {

    const [computerChoice, setComputerChoice] = useState('banana');

    //Aca deberia haber alguna logica random para setComputerChoice;

    let WinnerOrLooser = '';

    if (computerChoice === userChoice){
        WinnerOrLooser = 'Gano la Compu!';
    } else {
        WinnerOrLooser = 'Ganaste!';
    }


    return (
        <ScrollView>
           <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
              <View>
                  <Header title={'Jugando'}/>
                  <Text style={styles.text}>El usuario eligio {userChoice}</Text>
                  <Text style={styles.text}>La compu eligio {computerChoice}</Text>
                  <Text style={styles.text}>{WinnerOrLooser}</Text>
                  <Button color="#52528C" title="Jugar de Nuevo" onPress={() => gameStatus('')}/>
               </View>
            </TouchableWithoutFeedback>
       </ScrollView>
    );
};

export default GameScreen;
