import React, {Componennt} from 'react';
import {
    AppRegistry, FlatList, StyleSheet, Text, View, Imagem, Alert,
    Platform, TouchableHighlight, Dimensions,
    TextInput
} from 'react-native';
import Modal from 'react-native-modalbox'
import Button from 'react-native-button'


const screen = Dimensions.get('window');
export const ModalInput =()=>{
    <Modal
        style={{
        justifyContent: 'center',
        borderRadius: 0,
        shadowRadius: 10,
        width: screen.width -80,
        heigh: 280
        }}
        position='center'
        backdrop={true}
        onClosed={() =>{
            alert("Modal Closed")
        }}>
            <Text>New info</Text>
    </Modal>
}