import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function Home() {

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Text>Home</Text>
            <Button
            title='Contato'
            onPress={() => navigation.navigate('Contato')}
            />
            <Button
            title='Abrir Menu'
            onPress={() => navigation.toggleDrawer()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})