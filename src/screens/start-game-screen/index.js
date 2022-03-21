import React, { useState } from 'react';
import { ScrollView, TouchableWithoutFeedback, Keyboard, View, Text, Button} from 'react-native';

//import { colors } from '../../constants/theme';
import Header from '../../components/header';
import Images from '../../components/images';

import { styles } from './styles';

const StartGameScreen = ({gameStatus, userChoice}) => {

   const [selectedImage, setSelectedImage] = useState('');

   const selectImagen = (imagen) => {
       setSelectedImage(imagen);
   };

   const handlePress = () => {
      gameStatus('GameON');
      userChoice(selectedImage);
   }

    return (
        <ScrollView>
           <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
              <View>
                    <Header title={'Instrucciones'}/>
                    <Text style={styles.text}> Elija una de las tres opciones.</Text>
                    <Text style={styles.text}> La computadora intentará adivinar cuál eligió. </Text>
                     <Images selectImage={selectImagen}/>
                     <Text style={styles.text}>Imagen seleccionada: {selectedImage}</Text>
                     <Button title="Jugar" color="#52528C" onPress={() => handlePress()  }/>
               </View>
            </TouchableWithoutFeedback>
       </ScrollView>
    );
};

export default StartGameScreen;
