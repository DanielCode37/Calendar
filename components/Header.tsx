import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function Header() {
    return (
        <View style={styles.Header}>
            <Button title='&#x1F50E;' onPress={() => alert()}></Button>
            <Text style={styles.date}>{formatDate()}</Text>
            <Button title='+' onPress={() => alert()}></Button>
        </View>
    )
}


function formatDate(): String {
    const date = new Date;
    const day = () => {
        return date.getDate();
    }
    const month = () => {
        return date.getMonth() + 1;
    }
    const year = () => {
        return date.getFullYear();
    }
    return `${day()}.${month()}.${year()}`;
}

const styles = StyleSheet.create({
    Header: {
        width: '100%',
        backgroundColor: '#222',
        color: 'whitesmoke',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    date: {
        padding: 10,
        color: 'whitesmoke'
    }
});