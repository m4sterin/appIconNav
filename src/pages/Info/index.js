import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Info() {

    const navigation = useNavigation();
    return(
        <View>
            <Text>Info</Text>
            <Text>Xesque</Text>
            <Button
            title="Voltar para Home"
            onPress={() => navigation.goBack()}
            />
        </View>
    );
}