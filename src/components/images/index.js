import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

import {styles} from './styles';

const Images = ({selectImage}) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => selectImage('banana')}>
                <Image style={styles.image} source={require('../../../assets/images/banana.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => selectImage('manzana')}>
                <Image style={styles.image} source={require('../../../assets/images/manzana.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => selectImage('pera')}>
                <Image style={styles.image} source={require('../../../assets/images/pera.png')}/>
            </TouchableOpacity>
        </View>
    );
};

export default Images;
