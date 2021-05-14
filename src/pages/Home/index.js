import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {

    const navigation = useNavigation();
    function irSobre() {
        navigation.navigate('Sobre', {
            nome: 'Caio',
            email: 'caio@unipam.edu.br'
        });
    }

    return(
        <View>
            <Text>Home</Text>
            <Text>Conteudo Inicial</Text>
            <Button
                title='Sobre'
                onPress={irSobre}
            />
            <Button
                title='Informações'
                onPress={() => navigation.navigate('Info')}
            />
        </View>
    );
}